import { GET, Path, PathParam, QueryParam } from "typescript-rest";
import * as Promise from "bluebird";
import { ScalarService } from "../scalar/ScalarService";
import { Widget } from "../../integrations/Widget";
import { CACHE_INTEGRATIONS, Cache } from "../../MemoryCache";
import { Integration } from "../../integrations/Integration";
import { ApiError } from "../ApiError";
import { WidgetStore } from "../../db/WidgetStore";

export interface IntegrationsResponse {
    widgets: Widget[],
}

@Path("/api/v1/dimension/integrations")
export class DimensionIntegrationsService {

    public static getIntegrations(isEnabledCheck?: boolean): Promise<IntegrationsResponse> {
        const cachedResponse = Cache.for(CACHE_INTEGRATIONS).get("integrations_" + isEnabledCheck);
        if (cachedResponse) {
            return cachedResponse;
        }
        const response = <IntegrationsResponse>{
            widgets: [],
        };
        return Promise.resolve()
            .then(() => WidgetStore.listAll(isEnabledCheck))
            .then(widgets => response.widgets = widgets)

            // Cache and return response
            .then(() => Cache.for(CACHE_INTEGRATIONS).put("integrations_" + isEnabledCheck, response))
            .then(() => response);
    }

    @GET
    @Path("enabled")
    public getEnabledIntegrations(@QueryParam("scalar_token") scalarToken: string): Promise<IntegrationsResponse> {
        return ScalarService.getTokenOwner(scalarToken).then(_userId => {
            return DimensionIntegrationsService.getIntegrations(true);
        }, ScalarService.invalidTokenErrorHandler);
    }

    @GET
    @Path("room/:roomId")
    public getIntegrationsInRoom(@QueryParam("scalar_token") scalarToken: string, @PathParam("roomId") roomId: string): Promise<IntegrationsResponse> {
        console.log(roomId);
        // TODO: Other integrations
        return this.getEnabledIntegrations(scalarToken);
    }

    @GET
    @Path(":category/:type")
    public getIntegration(@PathParam("category") category: string, @PathParam("type") type: string): Promise<Integration> {
        // This is intentionally an unauthed endpoint to ensure we can use it in widgets
        return DimensionIntegrationsService.getIntegrations(true).then(response => {
            for (const key of Object.keys(response)) {
                for (const integration of <Integration[]>response[key]) {
                    if (integration.category === category && integration.type === type) {
                        return integration;
                    }
                }
            }

            throw new ApiError(404, "Integration not found");
        });
    }
}
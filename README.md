
DISCLAIMER - ABANDONED/UNMAINTAINED CODE / DO NOT USE
=======================================================
While this repository has been inactive for some time, this formal notice, issued on **December 10, 2024**, serves as the official declaration to clarify the situation. Consequently, this repository and all associated resources (including related projects, code, documentation, and distributed packages such as Docker images, PyPI packages, etc.) are now explicitly declared **unmaintained** and **abandoned**.

I would like to remind everyone that this project’s free license has always been based on the principle that the software is provided "AS-IS", without any warranty or expectation of liability or maintenance from the maintainer.
As such, it is used solely at the user's own risk, with no warranty or liability from the maintainer, including but not limited to any damages arising from its use.

Due to the enactment of the Cyber Resilience Act (EU Regulation 2024/2847), which significantly alters the regulatory framework, including penalties of up to €15M, combined with its demands for **unpaid** and **indefinite** liability, it has become untenable for me to continue maintaining all my Open Source Projects as a natural person.
The new regulations impose personal liability risks and create an unacceptable burden, regardless of my personal situation now or in the future, particularly when the work is done voluntarily and without compensation.

**No further technical support, updates (including security patches), or maintenance, of any kind, will be provided.**

These resources may remain online, but solely for public archiving, documentation, and educational purposes.

Users are strongly advised not to use these resources in any active or production-related projects, and to seek alternative solutions that comply with the new legal requirements (EU CRA).

**Using these resources outside of these contexts is strictly prohibited and is done at your own risk.**

This project has been transfered to Makina Corpus <freesoftware-corpus.com> ( https://makina-corpus.com ). This project and its associated resources, including published resources related to this project (e.g., from PyPI, Docker Hub, GitHub, etc.), may be removed starting **March 15, 2025**, especially if the CRA’s risks remain disproportionate.

![dimension](https://t2bot.io/_matrix/media/r0/download/t2l.io/b3101d429588673087f457a4bdd52f45)


[![TravisCI badge](https://travis-ci.org/turt2live/matrix-dimension.svg?branch=master)](https://travis-ci.org/turt2live/matrix-dimension)

An open source integration manager for matrix clients, like Element. For help and support, please visit
us in [#dimension:t2bot.io](https://matrix.to/#/#dimension:t2bot.io) on Matrix.

# Installing Dimension / Running your own

See [docs/installing.md](./docs/installing.md) for more information on running Dimension.

### "Could not contact integrations server" error

1. **Check that federation is enabled and working on your homeserver.** If you're not intentionally
running Dimension in a non-federated environment, make sure that your homeserver is configured
correctly. If you are running in a non-federated environment, consult [docs/unfederated.md](./docs/unfederated.md).
2. **Check your SRV records and .well-known delegation.** If you are using SRV records to point to your
federation port, make sure that the hostname and port are correct, and that HTTPS is listening on that
port. Dimension will use the first record it sees and will only communicate over HTTPS. If you're using
.well-known delegation for federation, double check that is set up correctly.
3. **Verify the homeserver information in your configuration.** The name, access token, and client/
server API URL all need to be set to point towards your homeserver. It may also be necessary to set the
federation URL if you're running a private server.
4. **Run the troubleshooter.** If you're on Element, type `/addwidget https://dimension.t2bot.io/widgets/manager-test`
in a private room then click the button.

# Do I need an integrations manager?

Integration managers aim to ease a user's interaction with the various services a homeserver may
provide. Often times the integrations manager provided by Element, is more than suitable.
However, there are a few cases where running your own makes more sense:

* Wanting to self-host all aspects of your services (client, homeserver, and integrations)
* Wanting to advertise custom bots specific to your homeserver
* Corporate or closed environments where the default integration manager won't work

# How do integration managers work?

Integration managers sit between your users and your integrations (bots, bridges, etc). It helps guide
users through the configuration of your integrations for their rooms. The integrations manager can only
manage integrations it is configured for. For example, Modular can only provide configuration for the
bridges and bots running on matrix.org, while Dimension can provide configuration for your own bots and
bridges.

The infrastructure diagram looks something like this:
![infrastructure](https://t2bot.io/_matrix/media/r0/download/t2l.io/3bb5674d85ee22c070e36be0d9582b4d)

# Development

For more information about working on Dimension, see DEVELOPMENT.md.

# License

For information about Dimension's license, please see the LICENSE file included in this repository.

DISCLAIMER
============

**UNMAINTAINED/ABANDONED CODE / DO NOT USE**

Due to the new EU Cyber Resilience Act (as European Union), even if it was implied because there was no more activity, this repository is now explicitly declared unmaintained.

The content does not meet the new regulatory requirements and therefore cannot be deployed or distributed, especially in a European context.

This repository now remains online ONLY for public archiving, documentation and education purposes and we ask everyone to respect this.

As stated, the maintainers stopped development and therefore all support some time ago, and make this declaration on December 15, 2024.

We may also unpublish soon (as in the following monthes) any published ressources tied to the corpusops project (pypi, dockerhub, ansible-galaxy, the repositories).
So, please don't rely on it after March 15, 2025 and adapt whatever project which used this code.





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

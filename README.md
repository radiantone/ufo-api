# UFO API

This repo is in response to a coding assignment that had the following requirements:

Build a UFO sighting database service. The service must have a REST API. A UI is not
required. The database should, at a minimum, include:

    • Location
    • Date of occurrence
    • Details of sighting

The National UFO Reporting Center data feeds can be used to seed your database
with the sightings for the last 6 months (http://www.nuforc.org/webreports.html). Your
service should update its database at least daily.

The API must return responses in JSON. The API must allow for retrieving all sightings.
The API must also allow for retrieving sightings by:

    • Location
    • Date of occurrence 

## Introduction

Beyond the provided requirements, some additional design goals for this project.

1. Come as close to a production-grade API offering as time allows
2. Centralize all the API and proxy logs for easy browsing
3. Auto-generated html documentation
4. Linting, static type-checking and auto-reformatting (auto-fix linting errors)
5. OpenAPI/Swagger compliance with SwaggerUI
6. Protect API service with a reverse proxy
7. API service runs redundantly on available cores
8. If any API process fails, it is restarted automatically (via gunicorn for worker processes and supervisord for main API process)
9. Provide a CLI to conveniently interact with the API and start the service
10. Unit tests
11. Containerization

### Notes

Even thought I've included self-signed certificates for localhost access via nginx, this is merely done for completeness and a production system would have proper CA signed certificates for its server domain.

Additionally, I've elected to exclude any kind of authorization (OAuth, etc) within the API. Depending on the production setting, this might be handled by the surrounding SSO system rather than within the API process.

## Installation

If you do not have `make` installed, then run 
```bash
$ ./bin/depends.sh
```
### Pre-requisites

A linux-like system (preferrably linux, not macos). Windows platform is not supported.

## Build

Build all the dockers
```bash
$ make build
```

### Linting & Formatting

Code quality checks and re-formatting.

```bash
$ make lint
$ make format
```
### Docs

There is a make target to automatically generate docs for the UFO cli, which will launch the docs in google chrome browser when it completes.
```bash
$ make docs
```
## Test

```bash
$ make test
```

## Run
Bring the docker stack up
```bash
$ make up
```

## Accessing the API

The UFO API runs behind the NGINX proxy which can be accessed here [UFO API](https://localhost/api)
> NOTE: The certificate for localhos is self-signed and thus your browser will flag it as a security risk. In production a proper CA signed server cert would be used.

## Using the CLI

The UFO cli, `ufo --help` is used to do some basic admin tasks for the project such as launching the API service and browsing the data.
```bash
$ ufo --help
Usage: ufo [OPTIONS] COMMAND [ARGS]...

  UFO CLI to interact with API

Options:
  --debug  Debug switch
  --help   Show this message and exit.

Commands:
  start  Start the UFO API service
```
## Stop & Clean
Stop all the services and clean up any orphaned docker images
```bash
$ make stop && make clean && make refresh
```
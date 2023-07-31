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

Finally, I've not expended much effort in the code/commit documentation side of things due to limited time, but in a real-world setting git commits would contain ticket #'s and meaningful messages for individual files or small file sets.

## Installation

### Pre-requisites

## Build

### Linting & Formatting

## Test

## Run

## Clean
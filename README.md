# UFO API

This repo is in response to a coding assignment that had the following requirements:
1. qaa
2. aaa

## Introduction

Beyond the provided requirements, some additional design goals I wanted to provide.

1. Come as close to a production-grade API offering as time allows
2. Centralize all the API and proxy logs for easy browsing
3. Auto-generated documentation/html
4. Linting and auto-reformatting (auto-fix linting errors)
5. OpenAPI/Swagger compliance with SwaggerUI
6. Protect API service with a reverse proxy
7. API service runs redundantly on available cores
8. If any API process fails, it is restarted automatically (via gunicorn for worker processes and supervisord for main API process)
9. Provide a CLI to conveniently interact with the API and start the service

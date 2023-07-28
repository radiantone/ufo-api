"""
UFO API server Flask app
"""
import configparser
import json
import logging
import os
import platform
from typing import Any, Type

import requests
from dotenv import load_dotenv
from flasgger import Swagger
from flask import Flask, jsonify, make_response, request, send_from_directory, session
from flask_cors import CORS, cross_origin
from flask_restx import Api, Resource, fields, reqparse

load_dotenv()


app = Flask(__name__)
app.secret_key = "super secret key"
cors = CORS(app, resources={r"/*": {"origins": "*"}})

api = Api(
    app,
    version="1.0",
    title="UFO API",
    description="UFO Coding Challenge API",
)

template = {
    "swagger": "2.0",
    "info": {
        "title": "UFO API",
        "description": "UFO API",
        "contact": {
            "responsibleOrganization": "Darren Govoni",
            "responsibleDeveloper": "Darren Govoni",
            "email": "darren@ontrenet.com",
            "url": "",
        },
        "version": "0.0.1",
    },
    "host": "localhost:8001/",
    "basePath": "/",
    # "schemes": ["https", "http"],
    "schemes": ["http"],
    "operationId": "searchOperation",
}

swagger_config = {
    "title": "UFO API",
    "headers": [],
    "specs": [
        {
            "endpoint": "search",
            "route": "/search",
            "rule_filter": lambda rule: True,  # all in
            "model_filter": lambda tag: True,  # all in
        }
    ],
    "static_url_path": "/flasgger_static",
    "specs_route": "/ui",
    "url_prefix": "/docs",
}
swagger = Swagger(app=app, template=template, config=swagger_config)


# Error handler
class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code


@app.errorhandler(AuthError)
def handle_auth_error(ex):
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response


def get_token_auth_header():
    """Obtains the Access Token from the Authorization Header"""
    auth = request.headers.get("Authorization", None)
    if not auth:
        raise AuthError(
            {
                "code": "authorization_header_missing",
                "description": "Authorization header is expected",
            },
            401,
        )

    parts = auth.split()

    if parts[0].lower() != "bearer":
        raise AuthError(
            {
                "code": "invalid_header",
                "description": "Authorization header must start with" " Bearer",
            },
            401,
        )
    elif len(parts) == 1:
        raise AuthError(
            {"code": "invalid_header", "description": "Token not found"}, 401
        )
    elif len(parts) > 2:
        raise AuthError(
            {
                "code": "invalid_header",
                "description": "Authorization header must be" " Bearer token",
            },
            401,
        )

    token = parts[1]
    return token


class SearchService(Resource):
    def get(self):
        return "Search" + os.environ["UFO_DATA_URL"]


search = api.namespace("search", description="Search the UFO database")
route = search.route("/")
route(SearchService)

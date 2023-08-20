import os

from flask import Flask

from weather_api_server.weather import weather_api


def create_app(text_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev'  # At this point, I don't have plans for a DB.
    )

    if text_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else: app.config.from_mapping(text_config)

    try: os.makedirs(app.instance_path)
    except OSError: pass

    app.register_blueprint(weather_api)

    return app
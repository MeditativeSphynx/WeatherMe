import json
import requests

from flask import request, Blueprint


weather_api = Blueprint('weather_api', __name__)


@weather_api.route('/api/v1/weather')
def get_weather():
    geo = f'http://freegeoip.net/json/github.com'
    r = requests.get(geo)
    print(r.text)
    return r.text
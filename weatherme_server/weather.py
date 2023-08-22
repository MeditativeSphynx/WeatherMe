import os
import re
from datetime import datetime

import requests
from flask import request, Blueprint


weather_api = Blueprint('weather_api', __name__)

@weather_api.route('/api/v1/weather')
def get_weather():
    ip = request.remote_addr
    ip_regex = r'(^[0-9]{2,3})'
    local_ip_first_octets = [
        '10', '100', '127', '172', '192', '198'
    ]

    # In case the app is being ran and accessed locally:
    # If the IP starts with an octet within the local_ip_first_octet
    if re.match(ip_regex, ip)[0] in local_ip_first_octets:
        # Then make a request to get the public IP.
        public_ip = requests.get('https://api.ipify.org/').text
    else:
        # Otherwise, set public_ip to the value of ip
        public_ip = ip

    ipStackBaseUri = 'http://api.ipstack.com'
    os.environ['IPSTACK_KEY'] = '2de799aa7783332f9eb3db86d67496f1'  # REMOVE AFTER TESTING
    ipStackKey = os.environ.get("IPSTACK_KEY")

    geo_ip_uri = f'{ipStackBaseUri}/{public_ip}?access_key={ipStackKey}'
    geo_req = requests.get(geo_ip_uri).json()

    lat = geo_req.get('latitude')
    lon = geo_req.get('longitude')

    # Get the weather for the specified lat and lon in geo_req
    weather_coord_req = requests.get(
        f'https://api.weather.gov/points/{lat},{lon}'
    ).json()

    # Pull the URI from the lat,lon request from NWS API.
    forecast_uri = weather_coord_req['properties']['forecast']
    weather_req = requests.get(forecast_uri).json()
    weather_properties = weather_req.get('properties')
    weather_properties.update({ 
        'city': geo_req.get('city'),
        'region_code': geo_req.get('region_code'),
        'region': geo_req.get('region_name'),
        'zip': geo_req.get('zip'),
        'updated': datetime.now()
    })

    # return weather_req.json()
    return weather_properties

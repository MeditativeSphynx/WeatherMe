import os
import re
from datetime import datetime

import requests
from flask import request, Blueprint


weather_api = Blueprint('weather_api', __name__)

ip_stack_key = os.environ.get("IPSTACK_KEY")
weather_key = os.environ.get("WEATHER_KEY")

ip_stack_base_uri = 'http://api.ipstack.com'
weatherapi_base_uri = 'http://api.weatherapi.com/v1'

@weather_api.route('/api/v1/weather/current')
def get_weather_data():
    # get the client user's ip.
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

    geo_ip_uri = f'{ip_stack_base_uri}/{public_ip}?access_key={ip_stack_key}'
    geo_req = requests.get(geo_ip_uri).json()

    city = geo_req.get('city')

    weather_resp = requests.get(
        f'{weatherapi_base_uri}/forecast.json?key={weather_key}&q={city}&aqi=no&days=3'
    ).json()

    return weather_resp

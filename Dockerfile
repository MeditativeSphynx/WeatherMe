FROM python:3.11.4-bookworm
WORKDIR /server
ENV FLASK_APP=/weather_api_server/__init__.py
ENV FLACK_RUN_HOST=0.0.0.0
COPY ./server/requirements.txt requirements.txt
RUN pip install -r requirements.txt
RUN pip install -e ./server/weather_api_server
EXPOSE 5000
COPY . .
CMD ["flask", "run"]
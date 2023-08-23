FROM python:3.11.4-bookworm
WORKDIR /weatherme_server
COPY requirements.txt /weatherme_server
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY . /weatherme_server
ENV FLASK_APP=wmserver.py
ENV IPSTACK_KEY=2de799aa7783332f9eb3db86d67496f1
ENV WEATHER_KEY=5dc4e6b937174251beb233810232208
EXPOSE 5000
CMD ["flask", "run", "--host", "0.0.0.0"]
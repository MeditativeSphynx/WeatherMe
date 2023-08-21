FROM python:3.11.4-bookworm
WORKDIR /weatherme_server
COPY requirements.txt /weatherme_server
RUN pip install -r requirements.txt
COPY . /weatherme_server
ENV FLASK_APP=__init__.py
ENV FLACK_RUN_HOST=0.0.0.0
EXPOSE 5000
CMD ["flask", "run"]
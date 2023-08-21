FROM node:20
RUN mkdir /weatherme_client
WORKDIR /weatherme_client
RUN npm install -g @angular/cli
COPY package.json package-lock.json ./
RUN npm ci
COPY . /weatherme_client
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
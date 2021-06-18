FROM node:12.16.3

WORKDIR /code
COPY ./package.json /code/package.json
COPY ./package-lock.json /code/package-lock.json
COPY ./gatsby-config.js /code/gatsby-config.js

RUN npm install -g npm@6.14.5
RUN npm install

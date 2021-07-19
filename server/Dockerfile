# syntax=docker/dockerfile:experimental

FROM node:lts-slim 

WORKDIR /app

COPY package.json .
RUN yarn install

COPY . ./server
EXPOSE 5000
CMD ["yarn", "dev"]
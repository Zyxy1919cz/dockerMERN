# syntax=docker/dockerfile:experimental

FROM node:lts-slim 

WORKDIR /app/server

COPY package.json .
RUN yarn install

COPY . .
CMD ["yarn", "start"]
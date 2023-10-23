# FROM node:alpine
# WORKDIR /usr/src/app
# COPY package* .
# RUN npm install
# COPY . .
# CMD node app.js

#Muti-Stage Production
FROM node:20 AS base
WORKDIR /usr/src/app
COPY package* .
RUN npm install

FROM base AS development
COPY . .
CMD ["npm","run","dev"]

FROM base AS production
COPY . .
RUN npm prune --production
CMD ["npm","run","start"]
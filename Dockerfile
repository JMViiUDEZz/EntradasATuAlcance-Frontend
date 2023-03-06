FROM node:16 AS install
LABEL stage=install

WORKDIR /src/install
COPY ./package.json .
COPY ./yarn.lock .

RUN yarn config set network-timeout 60000
RUN yarn install

FROM node:16 AS compile
LABEL stage=compile

WORKDIR /src/build
COPY --from=install /src/install .
COPY . .

RUN yarn build
RUN yarn config set network-timeout 60000
RUN yarn install --production=true

FROM nginx:1.19.0-alpine AS deploy

COPY --from=compile /src/build/dist/main.js /usr/share/nginx/html/index.js
COPY --from=compile /src/build/node_modules /usr/share/nginx/html/node_modules

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off" ]

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
RUN yarn start

FROM nginx:latest-alpine AS deploy

COPY ./public/favicon.ico /usr/share/nginx/html/favicon.ico
COPY ./entradasatualcance.com /etc/nginx/sites-available/entradasatualcance.com
RUN mkdir /etc/nginx/sites-enabled
RUN ln -s /etc/nginx/sites-available/entradasatualcance.com /etc/nginx/sites-enabled/

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

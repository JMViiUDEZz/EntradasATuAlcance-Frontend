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

COPY ./EntradasATuAlcance.conf /etc/nginx/sites-available/EntradasATuAlcance.conf
COPY --from=compile .next/server/pages/index.html /var/www/EntradasATuAlcance/index.html

RUN mkdir /etc/nginx/sites-enabled
RUN ln -s /etc/nginx/sites-available/EntradasATuAlcance.conf /etc/nginx/sites-enabled/

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off" ]

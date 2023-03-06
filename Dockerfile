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
RUN ln -s /etc/nginx/sites-available/EntradasATuAlcance.conf /etc/nginx/sites-enabled/
RUN systemctl restart nginx

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off" ]

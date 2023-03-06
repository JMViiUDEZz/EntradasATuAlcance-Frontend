FROM node:16 AS install
LABEL stage=install

COPY ./package.json .
COPY ./package-lock.json .
COPY ./yarn.lock .

RUN yarn config set network-timeout 60000
RUN npm install && mkdir /nextjs-ui && mv ./node_modules ./nextjs-ui

FROM node:16 AS compile
LABEL stage=compile

WORKDIR /nextjs-ui
COPY --from=install /nextjs-ui .
COPY . .

RUN npm run build
RUN yarn config set network-timeout 60000
RUN yarn install --production=true
RUN yarn start

FROM nginx:1.19.0-alpine AS deploy

RUN rm /etc/nginx/conf.d/*
COPY ./default.conf /etc/nginx/conf.d/
COPY ./public/favicon.ico /usr/share/nginx/html/favicon.ico
COPY ./entradasatualcance.com /etc/nginx/sites-available/entradasatualcance.com
RUN mkdir /etc/nginx/sites-enabled
RUN ln -s /etc/nginx/sites-available/entradasatualcance.com /etc/nginx/sites-enabled/

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

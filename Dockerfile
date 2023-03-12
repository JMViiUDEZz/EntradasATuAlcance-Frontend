# Utilizar la imagen base de Node 18
FROM node:18

# Crear el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto a la imagen
COPY package.json ./
COPY yarn.lock ./
COPY . .

# Instalar las dependencias
RUN yarn install

# Compilar la aplicación
RUN yarn build

# Utilizar la imagen base de NGINX
FROM nginx

# Copiar la configuración de NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos compilados de la aplicación
COPY --from=0 /app/.next/ /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar NGINX en primer plano
CMD ["nginx", "-g", "daemon off;"]

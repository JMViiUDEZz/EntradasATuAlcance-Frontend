# Selecciona una imagen base de Node.js
FROM node:14.15.0-alpine3.12 AS builder

# Configurar el directorio de trabajo de la aplicación
WORKDIR /app

# Copiar el archivo package.json y package-lock.json a la imagen
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto de la aplicación a la imagen
COPY . .

# Compilar la aplicación con Next.js
RUN npm run dev

# Configurar la imagen base de NGINX
FROM nginx:1.19.6-alpine

# Copiar la configuración de NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar la aplicación compilada de Next.js
# COPY --from=builder /app/out /usr/share/nginx/html

# Exponer el puerto 80 para NGINX
EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

# Selecciona la versión de Node.js que deseas utilizar
FROM node:18-alpine

# Crea y establece el directorio de trabajo de la aplicación
WORKDIR /app

# Import environment variables from .env file
ARG FRONTEND_NODE_PORT
ARG FRONTEND_NGINX_PORT

ENV FRONTEND_NODE_PORT=${FRONTEND_NODE_PORT}        
ENV FRONTEND_NGINX_PORT=${FRONTEND_NGINX_PORT}

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia todos los archivos de la aplicación al contenedor
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Expone el puerto 3000 para que Nginx pueda comunicarse con la aplicación
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]

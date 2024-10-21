# Usa la imagen oficial de Node.js desde Docker Hub
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (si están disponibles)
COPY package*.json ./
# Instala las dependencias
RUN npm install

COPY . .

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Comienza la aplicación
CMD ["node", "app.js"]


#
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

#  opizfpackage.json and package-lock.json 
COPY package*.json ./

# Instalar dependencias
RUN npm install


COPY . .

# puerto 4000
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

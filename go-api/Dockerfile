# imagen  Go 1.20
FROM golang:1.20-alpine


WORKDIR /app

# Copia los archivos de mod y sum y descarga las dependencias
COPY go.mod ./
COPY go.sum ./
RUN go mod download

# Copia de los archivos de la aplicación
COPY . .

# Compila la aplicación
RUN go build -o main ./cmd/api

# puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["./main"]

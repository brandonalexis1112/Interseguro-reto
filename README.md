# Proyecto Interseguro-Reto

## Descripción

Este proyecto consta de dos APIs desarrolladas en Go y Node.js. La API en Go realiza la factorización QR de matrices, y la API en Node.js recibe los datos resultantes y calcula estadísticas adicionales sobre las matrices. El frontend está desarrollado con Vue.js y se despliega en Amazon S3 y CloudFront.

## Requisitos Previos

- Go 1.18 o superior
- Node.js 14 o superior
- Docker y Docker Compose
- AWS CLI configurado
- Cuenta de AWS

## Instalación y Configuración

-Configuración del Entorno Local

## API en Go

```sh
cd go-api
go mod tidy
go run cmd/api/main.go
```

## API en Node.js

```sh
cd node-api
npm install
npm start
```

## Frontend

```sh
cd frontend
npm install
npm run serve
```
## Docker

```sh
docker-compose up --build -d
```

### Clonar el Repositorio

```sh
git clone https://github.com/brandonalexis1112/Interseguro-reto.git
cd interseguro-reto
```

## Uso

### Interacción con las APIs usando Postman

## Go API (http://localhost:3000/api/matrix)

### Request:

- Method: POST
- Body (JSON):
```json
{
  "matrix": [[1, 2], [3, 4]]
}
```
### Response:

- Body (JSON):
```json
{
  "q": [[1, 0], [0, 1]],
  "r": [[5, 6], [7, 8]]
}
```

## Node API (http://localhost:4000/api/matrix)

### Request:

-Method: POST
-Body (JSON):
```json
{
  "q": [[1, 0], [0, 1]],
  "r": [[5, 6], [7, 8]]
}
```
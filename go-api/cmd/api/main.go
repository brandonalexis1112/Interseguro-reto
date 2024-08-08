package main

import (
	"log"

	"github.com/brandonalexis/go-api/internal/handler"
	"github.com/brandonalexis/go-api/pkg/utils"
	jwtware "github.com/gofiber/contrib/jwt"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	utils.SetupCORS(app)

	app.Use(jwtware.New(jwtware.Config{
		SigningKey: jwtware.SigningKey{
			Key: []byte("your_jwt_secret"),
		},
	}))

	handler.SetupRoutes(app)

	log.Fatal(app.Listen(":3000"))
}

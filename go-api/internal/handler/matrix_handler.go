package handler

import (
	"github.com/brandonalexis/go-api/internal/model"
	"github.com/brandonalexis/go-api/internal/service"
	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	app.Post("/api/matrix", MatrixHandler)
}

func MatrixHandler(c *fiber.Ctx) error {
	var req model.MatrixRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid input"})
	}

	q, r := service.QRDecomposition(req.Matrix)
	return c.JSON(model.QRResponse{Q: q, R: r})
}

package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/thematthewko114/lets_hang_out/backend/src/test"
)

func main() {
	err := godotenv.Load("../.env.development")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	const BASE_PATH = "/api/v1"
	router := gin.Default()
	gin.SetMode(gin.ReleaseMode)

	// /api/v1/
	router.GET(BASE_PATH+"/", test.GetTestResponse)

	// /api/v1/db
	router.GET(BASE_PATH+"/db", test.SbDbTest)

	// app listener
	router.Run("localhost:8000")
}

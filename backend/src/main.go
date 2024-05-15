package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/supabase-community/supabase-go"
)

type TestResponse struct {
	Id   string
	Text string
}

func getTestResponse(c *gin.Context) {
	fmt.Println(os.Getenv("SUPABASE_URL"))
	c.JSON(200, gin.H{
		"message": "Server running",
	})
}

func sbDbTest(c *gin.Context) {
	sb_url := os.Getenv("SUPABASE_URL")
	sb_key := os.Getenv("SUPABASE_API_KEY")
	client, clientErr := supabase.NewClient(sb_url, sb_key, nil)
	if clientErr != nil {
		fmt.Errorf("cannot initalize Supabase client", clientErr)
	}
	data, count, sbErr := client.From("test").Select("*", "exact", false).ExecuteString()
	fmt.Println(data)
	if sbErr != nil {
		fmt.Errorf("cannot execute query in DB test", sbErr)
		c.JSON(500, gin.H{
			"error": sbErr.Error(),
		})
	} else {
		var responseData []TestResponse
		json.Unmarshal([]byte(data), &responseData)
		c.JSON(200, gin.H{
			"data":  responseData,
			"count": count,
		})
	}
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	const BASE_PATH = "/api/v1"
	router := gin.Default()
	gin.SetMode(gin.ReleaseMode)

	// /api/v1/
	router.GET(BASE_PATH+"/", getTestResponse)

	// /api/v1/db
	router.GET(BASE_PATH+"/db", sbDbTest)

	// app listener
	router.Run("localhost:8000")
}

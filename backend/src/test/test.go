package test

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/supabase-community/supabase-go"
)

type TestResponse struct {
	Id   string
	Text string
}

func GetTestResponse(c *gin.Context) {
	fmt.Println(os.Getenv("SUPABASE_URL"))
	c.JSON(200, gin.H{
		"message": "Server running",
	})
}

func SbDbTest(c *gin.Context) {
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

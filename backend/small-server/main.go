package main

import (
	"fmt"

	"github.com/joho/godotenv"
	"local.packages/router"
	//"github.com/oshigoto46/discord-clone-go-ts/backend/small-server"
)

func main() {

	router.Hoge()
	fmt.Print("main\n")
	error := godotenv.Load("")
	if error != nil {
		fmt.Print(("env file is not good\n"))
	}
}

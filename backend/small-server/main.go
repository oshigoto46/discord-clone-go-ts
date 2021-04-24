package main

import (
	"fmt"

	"github.com/joho/godotenv"
)

func main() {

	fmt.Print("main\n")
	error := godotenv.Load("")
	if error != nil {
		fmt.Print(("env file is not good\n"))
	}
}

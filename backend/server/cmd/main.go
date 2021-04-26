package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
    "github.com/oshigoto46/discord-clone-go-ts/backend/small-server"
	"github.com/kntkymt/discord_clone_server/server/api/database"
	"github.com/kntkymt/discord_clone_server/server/api/router"

	"github.com/joho/godotenv"
)

func main() {
	error := godotenv.Load(fmt.Sprintf("../%s.env", os.Getenv("GO_ENV")))
	fmt.Printf("Hello world\n")
	//fmt.Sprintf("hogehgoehogehogehogheoghe")
	if error != nil {
		log.Fatal("unable to finf env file. please create .env file.", error)
	}
	fmt.Printf("Hello world\n")
	var dbManager = database.CreateManager(os.Getenv("USERNAME"), os.Getenv("USERPASS"))
	var handler = router.CreateHandler(dbManager)
	http.ListenAndServe(":80", handler)

	defer dbManager.Close()
}

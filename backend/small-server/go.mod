module go.mod


go 1.16

require (
	github.com/joho/godotenv v1.3.0
	gopkg.in/gorp.v2 v2.2.0
	local.packages/router v0.0.0-00010101000000-000000000000 // indirect
)

replace local.packages/router => ./router

# discord_clone_golang
## Overview
- [Discord](https://discord.com/) のReact + Golang clone 

## Develop

1. copy  `.env.sample` to `.env`
 
### client

1. `yarn start` and 
see [http://localhost:3000](http://localhost:3000) 

### Cors

defalut accepts only from `localhost:3000`
if you launch other than localhost  make `server/api/router/cors.go` & `client/src/config/constants.ts` change it properly

## License
MIT License

package database

import (
	"fmt"

	"github.com/kntkymt/discord_clone_server/server/model/db"
)

func (dbManager *DBManager) GetAllChatServerUserByUser(id int) ([]db.ChatServerUser, error) {
	var chatServerUsers []db.ChatServerUser
	var _, error = dbManager.DBMap.Select(&chatServerUsers, "select * from chat_server_user WHERE user_id = ? order by id", id)
	if error != nil {
		return nil, error
	}

	return chatServerUsers, nil
}

func (dbManager *DBManager) GetAllChatServerUserByServer(id int) ([]db.ChatServerUser, error) {
	var chatServerUsers []db.ChatServerUser
	//var _, error = dbManager.DBMap.Select(&chatServerUsers, "select * from chat_server_user WHERE chat_server_id = ? order by id", id)
	var _, error = dbManager.DBMap.Select(&chatServerUsers, "select * from chat_server_user WHERE chat_server_id = 1 order by id")
	// TO id
	fmt.Print("\nGetAllChatServerUserByServer👇\n")
	fmt.Print(chatServerUsers)
	fmt.Print("\nGetAllChatServerUserByServer👆\n")

	if error != nil {
		return nil, error
	}

	return chatServerUsers, nil
}

func (dbManager *DBManager) InsertChatServerUser(userId int64, serverId int64) error {
	var entity = &db.ChatServerUser{
		ChatServerID: serverId,
		UserID:       userId}
	var insertError = dbManager.DBMap.Insert(entity)
	if insertError != nil {
		return insertError
	}

	return nil
}

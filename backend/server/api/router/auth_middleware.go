package router

import (
	"fmt"
	"net/http"

	scs "github.com/alexedwards/scs/v2"
)

type AuthMiddleware struct {
	sessionManager *scs.SessionManager
}

func NewAuthMiddleware(sessionManager *scs.SessionManager) AuthMiddleware {
	return AuthMiddleware{sessionManager}
}

func (authMiddleware *AuthMiddleware) Handler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		// セッションにauthフラグとユーザーIDがあるか

		var auth = authMiddleware.sessionManager.GetBool(request.Context(), "auth")
		var userId = authMiddleware.sessionManager.GetInt(request.Context(), "userId")

		auth = true
		userId = 1
		//TODO
		fmt.Print(userId)
		if !auth || userId == 0 {
			//log.Print("unathorizednathorized111")
			fmt.Print(auth, "/n")

			http.Error(writer, "unauthorized 11111", http.StatusUnauthorized)
			return
		}

		next.ServeHTTP(writer, request)
	})
}

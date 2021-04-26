"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUtils = void 0;
const user_manager_1 = require("./user-manager");
/**
 * ユーザーのユーティリティーです。
 */
class UserUtils {
    constructor() {
    }
    /**
     * ユーザーが成人かどうかをチェックします。
     *
     * @param userId ユーザーID
     * @return 成人の場合はtrue、未成年の場合はfalse
     */
    isAdult(userId) {
        // ユーザーを検索します。
        // 見つからない場合はErrorがthrowされるのでそのまま上位にthrowします。
        const manager = new user_manager_1.UserManager();
        const user = manager.find(userId);
        let isAdult = false;
        if (user.age >= 20) {
            isAdult = true;
        }
        else {
            isAdult = false;
        }
        return isAdult;
    }
}
exports.UserUtils = UserUtils;
//# sourceMappingURL=user-utils.js.map
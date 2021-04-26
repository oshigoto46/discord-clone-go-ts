import { UserManager } from './user-manager';
import { User } from './user';

/**
 * ユーザーのユーティリティーです。
 */
export class UserUtils {
    constructor() {
    }

    /**
     * ユーザーが成人かどうかをチェックします。
     * 
     * @param userId ユーザーID
     * @return 成人の場合はtrue、未成年の場合はfalse
     */
    public isAdult(userId: number): boolean {
        // ユーザーを検索します。
        // 見つからない場合はErrorがthrowされるのでそのまま上位にthrowします。
        const manager = new UserManager();
        const user = manager.find(userId);

        let isAdult = false;
        if (user.age >= 20) {
            isAdult = true;
        } else {
            isAdult = false;
        }
        return isAdult;
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
/**
 * ユーザーを管理するクラスです。
 */
var UserManager = /** @class */ (function () {
    function UserManager() {
    }
    /**
     * ユーザーIDをキーにユーザーを検索します。
     *
     * @param userId ユーザーID
     * @return ユーザーのオブジェクト
     */
    UserManager.prototype.find = function (userId) {
        // サンプルのため、見つからない旨のエラーをthrowします。
        throw new Error('not found!');
        // 実際には、データベース検索やWEB-API呼び出しなどで該当IDのユーザーを検索する処理などが実装されます。
        // なお、それらの処理は一般的には非同期処理となり、コールバックやPromiseなどでデータを返却する処理が必要となりますが、
        // このサンプルでは説明の簡略化のために同期処理のインターフェースにしています。
        // (async/await の仕組みを使って非同期処理を同期処理のように記述することもできます。)
    };
    return UserManager;
}());
exports.UserManager = UserManager;
//# sourceMappingURL=user-manager.js.map
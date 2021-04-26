import { User } from './user';

/**
 * ユーザーを管理するクラスです。 
 */
export class UserManager {
    constructor() {
    }

    /**
     * ユーザーIDをキーにユーザーを検索します。
     * 
     * @param userId ユーザーID
     * @return ユーザーのオブジェクト
     */
    public find(userId: number): User {
        // サンプルのため、見つからない旨のエラーをthrowします。
        throw new Error('not found!');

        // 実際には、データベース検索やWEB-API呼び出しなどで該当IDのユーザーを検索する処理などが実装されます。
        // なお、それらの処理は一般的には非同期処理となり、コールバックやPromiseなどでデータを返却する処理が必要となりますが、
        // このサンプルでは説明の簡略化のために同期処理のインターフェースにしています。
        // (async/await の仕組みを使って非同期処理を同期処理のように記述することもできます。)
    }
}

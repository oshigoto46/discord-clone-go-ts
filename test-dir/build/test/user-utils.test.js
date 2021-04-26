"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const user_utils_1 = require("../src/user-utils");
describe('UserUtilsのテスト', () => {
    it('存在しないユーザーの場合', () => {
        const target = new user_utils_1.UserUtils();
        const user1 = { id: 1, name: "成人ユーザ", age: 20 };
        const user2 = { id: 1, name: "未成年ユーザ", age: 20 };
        // Errorがthrowされることを確認
        chai.assert.throws(() => { target.isAdult(99999); }, Error, 'not found!');
    });
    it('存在しないユーザーの場合', () => {
        const target = new user_utils_1.UserUtils();
        const user1 = { id: 1, name: "成人ユーザ", age: 20 };
        const user2 = { id: 1, name: "未成年ユーザ", age: 20 };
        // Errorがthrowされることを確認
        chai.assert.throws(() => { target.isAdult(99999); }, Error, 'not found!');
    });
});
//# sourceMappingURL=user-utils.test.js.map
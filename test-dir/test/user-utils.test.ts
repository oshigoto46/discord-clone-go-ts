import * as chai from 'chai';

import { UserUtils } from '../src/user-utils';
import { User } from '../src/user';

describe('UserUtilsのテスト', () => {

    it('存在しないユーザーの場合', () => {
        const target = new UserUtils();

        const user1: User  = {id:1,name:"成人ユーザ",age:20};
        const user2: User  = {id:1,name:"未成年ユーザ",age:20};
        // Errorがthrowされることを確認
        chai.assert.throws(() => { target.isAdult(99999) }, Error, 'not found!');
    })

    it('存在しないユーザーの場合', () => {
        const target = new UserUtils();
        
        const user1: User  = {id:1,name:"成人ユーザ",age:20};
        const user2: User  = {id:1,name:"未成年ユーザ",age:20};
        // Errorがthrowされることを確認
        chai.assert.throws(() => { target.isAdult(99999) }, Error, 'not found!');
    })
});

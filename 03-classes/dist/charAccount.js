"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharAccount = void 0;
const userAccount_1 = require("./userAccount");
class CharAccount extends userAccount_1.UserAccount {
    constructor(name, age, nickname, level, details) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
        this.details = details;
    }
    charLogDetails() {
        console.log(`${this.getName} is the owner of the account called ${this.nickname} and is ${this.age} years old. `);
    }
}
exports.CharAccount = CharAccount;

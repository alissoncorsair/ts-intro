"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} has ${this.age} years old! :)`);
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    set setName(name) {
        this.name = name;
    }
}
exports.UserAccount = UserAccount;

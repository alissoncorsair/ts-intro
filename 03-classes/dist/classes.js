"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} has ${this.age} years old! :)`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    charLogDetails() {
        console.log(`${this.name} is the owner of the account called ${this.nickname} and is ${this.age} years old. `);
    }
}
const randomPlayer = new UserAccount("aleatorio", 19);
randomPlayer.logDetails();
console.log(randomPlayer.name);
const anotherAccount = new CharAccount("alisson", 19, "khoria", 100);
anotherAccount.charLogDetails();
console.log(anotherAccount);

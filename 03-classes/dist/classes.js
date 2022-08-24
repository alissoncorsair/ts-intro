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
const randomPlayer = new UserAccount("aleatorio", 19);
randomPlayer.logDetails();

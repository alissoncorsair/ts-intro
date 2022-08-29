import { UserAccount } from "./userAccount";

export class CharAccount extends UserAccount {

    nickname: string;
    level: number;
    readonly details?: string;

    constructor(name: string, age: number, nickname: string, level: number, details?: string) {
        super(name, age)
        this.nickname = nickname;
        this.level = level;
        this.details = details;
    }

    charLogDetails(): void {
        console.log(`${this.getName} is the owner of the account called ${this.nickname} and is ${this.age} years old. `)
    }
    
}
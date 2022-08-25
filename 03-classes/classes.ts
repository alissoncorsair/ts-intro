class UserAccount {
   public name: string;
   protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} has ${this.age} years old! :)`);
    }

    get getName(): string {
        return this.name;
    }

    get getAge(): number {
        return this.age;
    }

    
}

class CharAccount extends UserAccount {

    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)
        this.nickname = nickname;
        this.level = level;
    }

    charLogDetails(): void {
        console.log(`${this.name} is the owner of the account called ${this.nickname} and is ${this.age} years old. `)
    }
}


const randomPlayer = new UserAccount("aleatorio", 19);
randomPlayer.logDetails();
console.log(randomPlayer.name);

const anotherAccount = new CharAccount("alisson", 19, "khoria", 100)
anotherAccount.charLogDetails();
console.log(anotherAccount);
class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} has ${this.age} years old! :)`);
    }
}


const randomPlayer = new UserAccount("aleatorio", 19);
randomPlayer.logDetails();
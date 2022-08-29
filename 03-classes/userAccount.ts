export class UserAccount {
   private name: string;
   protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} has ${this.age} years old! :)`);
    }

    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age;
    }

    set setName(name: string) {
        this.name = name;
    }

    
}
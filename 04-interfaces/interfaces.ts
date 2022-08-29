interface Game {
    title: string;
    description: string;
    genre: string;
    platform: Array<string>;
    getSimilars?: (title: string) => void;
}

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;
    platform: Array<string>;
    constructor(title: string, description: string, genre: string, platform: Array<string>) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.platform = platform;
    }

}


const tlou: Game = {
    title: "lolzin",
    description: "random description lololol",
    genre: "action",
    platform: ["PC"],
    getSimilars() {
        console.log(`Similar games to ${this.title}: Dota..`);
    },
}

if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);    
}


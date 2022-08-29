"use strict";
class CreateGame {
    constructor(title, description, genre, platform) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.platform = platform;
    }
}
const tlou = {
    title: "lolzin",
    description: "random description lololol",
    genre: "action",
    platform: ["PC"],
    getSimilars() {
        console.log(`Similar games to ${this.title}: Dota..`);
    },
};
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}

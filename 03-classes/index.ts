import { UserAccount } from "./userAccount";
import { CharAccount } from "./charAccount";

console.log("------user account-------");
const randomPlayer = new UserAccount("aleatorio", 19);
randomPlayer.logDetails();
console.log(randomPlayer.getName);
console.log(randomPlayer);
randomPlayer.setName = "random";
console.log(randomPlayer.getName);

console.log("\n------char account-------");
const anotherAccount = new CharAccount("alisson", 19, "khoria", 100, 'details')
anotherAccount.charLogDetails();
console.log(anotherAccount);

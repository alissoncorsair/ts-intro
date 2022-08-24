"use strict";
/** boolean */
let isOpen;
isOpen = true;
// isOpen = "false";  dá erro
/** string */
let message;
message = "hello world";
/** number (int, float, hex, binary) */
let total;
total = 0xff0;
/** array (type[]) */
let items;
items = ["a", "b", "c"];
let values;
values = [1, 2, 3];
let words;
words = ["foo", "boo", "bah"];
// tuple <- a gente sabe o número de elementos dentro desse array e o tipo de cada elemento
let title;
title = [1, "alguma string", false];
// enum <- utilizado principalmente para quando queremos criar conjuntos de chave:valor
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) <- nao eh legal usar esse aqui
let coisa;
coisa = "qualquer coisa" || true || 2;
//void
const sayHi = () => {
    console.log("Hi");
};
sayHi();
// never
const error = () => {
    throw new Error("error");
};
// object
let obj;
obj = {
    key: "value"
};
//type inference <= o ts entende algumas tipagens mesmo sem vc tipar
let message2 = "alguma string";
const logDetails = (uid, item) => {
    console.log(`A product with the uid ${uid} has the title as ${item}`);
};
const logInfo = (uid, item) => {
    console.log(`Um ${uid} e um ${item} so p test`);
};
const typeAliasExample = (uid, item) => {
    console.log(`so to usando o type alias ${uid} e ${item}`);
};
logDetails("123", "sapato");
const choosePlatform = (platform) => {
    console.log(`The chosen platform was ${platform}!! gtz`);
};
//choosePlatform('something different');  da erro
choosePlatform('Linux');

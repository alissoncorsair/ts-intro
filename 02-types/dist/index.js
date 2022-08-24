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

/** boolean */
let isOpen: boolean;
isOpen = true;
// isOpen = "false";  dá erro

/** string */
let message: string;
message = "hello world";

/** number (int, float, hex, binary) */
let total: number; 
total = 0xff0;

/** array (type[]) */
let items: string[];
items = ["a", "b", "c"];

let values: Array<number>;
values = [1, 2, 3];

let words: Array<string>
words = ["foo", "boo", "bah"];


// tuple <- a gente sabe o número de elementos dentro desse array e o tipo de cada elemento
let title: [number, string, boolean];
title = [1, "alguma string", false];

// enum <- utilizado principalmente para quando queremos criar conjuntos de chave:valor
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa) <- nao eh legal usar esse aqui
let coisa: any;
coisa = "qualquer coisa" || true || 2;


//void
const sayHi =  ():void => {
    console.log("Hi");
}

sayHi();

// null | undefined
type Bla = string | undefined;

// never
const error = (): never => {
    throw new Error("error");
}

// object
let obj: object;
obj = {
    key: "value"
};

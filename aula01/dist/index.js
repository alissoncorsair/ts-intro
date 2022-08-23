"use strict";
var input1 = document.querySelector("#btn1");
var input2 = document.querySelector("#btn2");
;
var sum = document.querySelector("#sum");
function sumNum(a, b) {
    return a + b;
}
sum.addEventListener("click", function () {
    console.log(sumNum(Number(input1.value), Number(input2.value)));
});

var input1 = document.querySelector("#btn1") as HTMLInputElement;
var input2 = document.querySelector("#btn2") as HTMLInputElement;;
var sum = document.querySelector("#sum") as HTMLButtonElement;

function sumNum(a: number, b: number) {
    return a + b;
}

sum.addEventListener("click", function () {
    console.log(sumNum(Number(input1.value), Number(input2.value)));
});
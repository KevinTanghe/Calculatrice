let div = document.querySelectorAll("div");
let inputExo1 = div[4].querySelectorAll("input");
let buttonExo1 = div[4].querySelector("button");
let spanExo1 = div[4].querySelectorAll("span")
console.log(div);
// exo1
let value1Exo1;
let value2Exo1;
let valueReponse;


inputExo1[0].addEventListener("change", function(){
    value1Exo1 = Number(inputExo1[0].value);
    console.log(value1Exo1);
})

inputExo1[1].addEventListener("change", function(){
    value2Exo1 = Number(inputExo1[1].value);
    console.log(value2Exo1);
})


buttonExo1.addEventListener("click", function(){
    valueReponse = value1Exo1 + value2Exo1;
    console.log(valueReponse);
    spanExo1[1].innerHTML = valueReponse
})

let inputExo2 = div[7].querySelectorAll("input");
let selectExo2 = div[7].querySelector("select");
let buttonExo2 = div[7].querySelector("button");
let spanExo2 = div[7].querySelector("span");


let value1Exo2;
let value2Exo2;
let valueOperatorExo2;
let valueReponse2;


inputExo2[0].addEventListener("change", function(){
    value1Exo2 = Number(this.value);
})

selectExo2.addEventListener("change", function(){
    valueOperatorExo2 = this.value
})

inputExo2[1].addEventListener("change", function(){
    value2Exo2 = Number(this.value);
})

buttonExo2.addEventListener("click", function(){
    switch (valueOperatorExo2) {
        case "+":
            valueReponse2 = value1Exo2 + value2Exo2;
            break;
        case "-":
            valueReponse2 = value1Exo2 - value2Exo2;
            break
        case "*":
            valueReponse2 = value1Exo2 * value2Exo2;
            break
        case "/":
            valueReponse2 = value1Exo2 / value2Exo2;
            break
        default:
            break;
    }
    spanExo2.innerHTML = valueReponse2

})


let inputExo3 = div[10].querySelectorAll("input")
let buttonExo3 = div[10].querySelectorAll("button")
let spanExo3 = div[10].querySelectorAll("span");
console.log(buttonExo3);

let value1Exo3;
let value2Exo3;
let valueOperatorExo3;
let valueReponse3;


inputExo3[0].addEventListener("change", function(){
    value1Exo3 = Number(this.value);
})

inputExo3[1].addEventListener("change", function(){
    value2Exo3 = Number(this.value);
})

buttonExo3[1].addEventListener("click", function(){
    valueOperatorExo3 = "+";
})

buttonExo3[2].addEventListener("click", function(){
    valueOperatorExo3 = "-";
})

buttonExo3[3].addEventListener("click", function(){
    valueOperatorExo3 = "*";
})

buttonExo3[4].addEventListener("click", function(){
    valueOperatorExo3 = "/";
})

buttonExo3[0].addEventListener("click", function(){
    switch (valueOperatorExo3) {
        case "+":
            valueReponse3 = value1Exo3 + value2Exo3;
            break;
        case "-":
            valueReponse3 = value1Exo3 - value2Exo3;
            break;
        case "*":
            valueReponse3 = value1Exo3 * value2Exo3;
            break;
        case "/":
            valueReponse3 = value1Exo3 / value2Exo3;
        default:
            break;
    }
    spanExo3[1].innerHTML = valueReponse3

})
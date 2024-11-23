const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let op = parseInt(prompt("Digite a operação, sendo:\n'1' -> Soma\n'2' -> Subtração\n '3' -> Multiplicação\n '4' -> Divisão \n "));

switch (op) {
    case 1:
        console.log(`${num1} + ${num2} = ${num1+num2}`);
        break;
    case 2:
        console.log(`${num1} - ${num2} = ${num1-num2}`);        
        break;
    case 3:
        console.log(`${num1} x ${num2} = ${num1*num2}`);
        break;
    case 4:
        if(num2>0 || num2<0){
            console.log(`${num1} / ${num2} = ${num1/num2}`);
            break;
        }else{
            console.log(`Impossível dividir por 0`);
            break;
        }
    default:
        console.log("Operação inexistente!");
        break;
}
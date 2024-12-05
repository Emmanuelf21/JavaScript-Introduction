// let alimentos = ["Arroz", "Feijão", "Batata", "Macarrão", "Carne"];
// let alimentoProcurado = "Feijão";
// //      inicio     condição          incremento
// for (let i = 0; i < alimentos.length; i++) {
//     console.log(`Verificando alimento: ${alimentos[i]}`);

//     if (alimentos[i] === alimentoProcurado) {
//         console.log(`Fruta encontrada: ${alimentos[i]}`);
//         break;
//     }
// }


// let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// let soma=0;

// for (let index = 0; index < numeros.length; index++) {
//     soma += numeros[index];
// }

// console.log(soma);

let numeros = [10, 20, 30];

function exibirNumero(numero) {
    console.log(numero)
}

//chama a função exibir número para cada elemento do array
numeros.forEach(exibirNumero);

let cabecalho = ["Código", "nome", "Preco"]
let produto = ["ABC123", "fone", 100.00]

console.log(
    `Detalhes do produto:
    ${cabecalho[0]}: ${produto[0]}
    ${cabecalho[1]}: ${produto[1]}
    ${cabecalho[2]}: ${produto[2]}
    `
)

let frutas = ["Maçã", "Laranja", "Banana"];
frutas[1] = 'manga';

console.log(frutas);
console.log("\n----------------------------------------------------\n");

frutas.push("morango");
frutas.push("pera");
frutas.push("abacaxi");
frutas.push("limão"); //adiciona elemento no final

console.log(`O tamanho do array frutas é de ${frutas.length}`);
console.log(frutas.pop()); //remove o ultimo elemento
console.log("\n----------------------------------------------------\n");

frutas.unshift("uva");//insere no inicio do array
console.log(frutas);

console.log("\n----------------------------------------------------\n");

frutas.shift("uva");//retira do inicio do array
console.log(frutas);

console.log("\n----------------------------------------------------\n");

console.log(frutas.indexOf("abacaxi")); //retorna o indice

console.log("\n----------------------------------------------------\n");

console.log(frutas.slice(1,4)); //retorana os elementos na posição 1, 2 e 3

console.log("\n----------------------------------------------------\n");

console.log(frutas.splice(3,1)); //remove elementos a partir da posição 3, 1 é a qunatidade de elementos que irá remover
console.log(frutas);


console.log(frutas.splice(3,1)); //remove elementos a partir da posição 3, 1 é a qunatidade de elementos que irá remover

let frutasMaiusculas = frutas.map(function(fruta){
    return fruta.toUpperCase();
})

console.log(frutasMaiusculas);

console.log("\n----------------------------------------------------\n");

let frutasSaborosas = frutas.map(function(fruta){
    return fruta+" saborosa";
})

console.log(frutasSaborosas);

console.log("\n----------------------------------------------------\n");

let frutascomA = frutas.filter(function(fruta){
    return fruta.includes("a" || "ã");
});

console.log(frutascomA);
let alimentos = ["Arroz", "Feijão", "Batata", "Macarrão", "Carne"];
let alimentosNecessarios = [];
let j=0;
for (let i = 0; i < alimentos.length; i++) {
    if(alimentos[i] == "Feijão" || alimentos[i] == "Batata"){
        alimentosNecessarios[j] = alimentos[i];
        j++;
    }
}
console.log(alimentosNecessarios);
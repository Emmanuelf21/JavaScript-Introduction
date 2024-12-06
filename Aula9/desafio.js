let pessoas = [
  {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira",
  },
  {
    nome: "Carlos",
    idade: 35,
    profissao: "Professor",
  },
  {
    nome: "Maria",
    idade: 22,
    profissao: "Designer",
  },
];

for (const pessoa of pessoas) {
  let chaves = Object.keys(pessoa);

  console.log("\n------------\n");

  chaves.forEach((chave) => {
    console.log(`${chave}: ${pessoa[chave]}`);
  });
}
console.log("\n------------");

// outro jeito de resolver

// for (let i=0; i<pessoas.length;i++) {
//     let chaves = Object.keys(pessoas[i]);
//   console.log("\n------------\n");
//     for (let j=0;j<chaves.length;j++) {
//         console.log(`${chaves[j]}: ${pessoas[i][chaves[j]]}`);
//     }
//   }
// console.log("\n------------");

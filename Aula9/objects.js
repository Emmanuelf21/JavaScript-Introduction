let fruta = "maçã"; //criando variavel

let frutas = ["maçã", "banana", "uva"]; //criando array

let pessoa2 = {
  // criando objeto
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
};

// ----------------------------------

//exemplo de objeto dentro de objeto

const pessoa = {
  nome: "João",
  idade: 30,
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo",
    estado: "SP",
  },
  cep: "844838-023",
};

// Acessando propriedades do objeto 'endereco'
console.log(pessoa.nome); // João
console.log(pessoa.endereco.rua); // Rua das Flores
console.log(pessoa.endereco.cidade); // São Paulo
console.log(pessoa.cep);

// --------------------------------------------------------

const pessoas = [
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

// Acessando os objetos no array
console.log(pessoas[0].nome); // Ana
console.log(pessoas[1].idade); // 35
console.log(pessoas[2].profissao); // Designer

// --------------------------------------------------------

//array de arrays
// exemplo cada filial tem 3 vendas: frutas, bolsas, canetas

let vendasLojas = [
  [2000, 3000, 4000],
  [400, 500, 1000],
  [100, 600, 2300],
];

console.log(`
    Loja 1 (vendas): 
        -  Frutas: ${vendasLojas[0][0]}
        -  Bolsas: ${vendasLojas[0][1]}
        -  Canetas: ${vendasLojas[0][2]}

    Loja 2 (vendas): 
        -  Frutas: ${vendasLojas[1][0]}
        -  Bolsas: ${vendasLojas[1][1]}
        -  Canetas: ${vendasLojas[1][2]}
    
    Loja 3 (vendas): 
        -  Frutas: ${vendasLojas[2][0]}
        -  Bolsas: ${vendasLojas[2][1]}
        -  Canetas: ${vendasLojas[2][2]}
    `);

// --------------------------------------------------------

//objeto contendo varios objetos dentro
const empresa = {
  funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
  funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
  funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" },
};

// Acessando os objetos dentro do objeto 'empresa'
console.log(empresa.funcionario1.nome); // Ana
console.log(empresa.funcionario2.cargo); // Professor
console.log(empresa.funcionario3.idade); // 22

// --------------------------------------------------------

empresa.funcionario3.idade += 1;
console.log(
  `\n${empresa.funcionario3.nome} possui ${empresa.funcionario3.idade} anos`
);

// --------------------------------------------------------
//inserindo objeto em outro objeto

const pessoa3 = {
  nome: "Ana",
  idade: 25,
};

pessoa3.endereco = {
  rua: "Avenida Central",
  numero: 456,
  cidade: "Rio de Janeiro",
  estado: "RJ",
};

console.log("\n" + pessoa3.endereco.cidade); // Rio de Janeiro

// --------------------------------------------------------
//inserindo um objeto em um array de objetos

const pessoas2 = [
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
];
pessoas2.push({
  nome: "Pedro",
  idade: 40,
  profissao: "Médico",
});

console.log("\n" + pessoas2[2].nome); // Pedro

// --------------------------------------------------------

//removento um objeto

const empresa1 = {
  nome: "Tech Solutions",
  fundacao: 2010,
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo",
    estado: "SP",
  },
};

// Removendo o objeto 'endereco'
delete empresa1.endereco;

console.log(empresa1);
/*
Saída:
{
    nome: "Tech Solutions",
    fundacao: 2010
    }
    */

// --------------------------------------------------------

// mesclar objetos

const pessoa4 = {
  nome: "João",
  idade: 30,
};

const novoEndereco = {
  endereco: {
    rua: "Rua das Palmeiras",
    numero: 456,
    cidade: "Rio de Janeiro",
  },
};

// Mesclando o novo objeto 'endereco' no objeto 'pessoa'
Object.assign(pessoa4, novoEndereco);

console.log(pessoa4);
/*
    Saída:
    {
        nome: "João",
        idade: 30,
        endereco: {
            rua: "Rua das Palmeiras",
            numero: 456,
            cidade: "Rio de Janeiro"
            }
            }
            */
// --------------------------------------------------------

// retorna as chaves de um objeto
console.log("\n---------------\n");
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']

keys.forEach((chave) => {
  console.log(person[chave]);
});

// --------------------------------------------------------
//criar um array com os valores de um objeto
console.log("\n---------------\n");

const person1 = {
  name: "John",
  age: 30,
  city: "New York",
};
const values = Object.values(person1);
console.log(values); // ['John', 30, 'New York']
valores.forEach((valor) => {
  console.log(valor);
});

// --------------------------------------------------------
console.log("\n---------------\n");
//adicionando email ao objeto pessoa
pessoa.email = "joao@email.com";
console.log(pessoa); // { nome: 'João', idade: 30, email: 'joao@email.com' }

// --------------------------------------------------------
console.log("\n---------------\n");

let pessoa5 = {
  nome: "João",
  idade: 30,
  saudacao: function () {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
};
console.log("nome" in pessoa5); // true
console.log("sobrenome" in pessoa5); // false

//outra maneira de verificar se o objeto possui uma propriedade especifica
console.log(pessoa5.hasOwnProperty("idade")); // true

// ------------------------------------------------------------------ //
//percorrendo um objeto com for...in
console.log("\n---------------\n");

let pessoa6 = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
};
for (let chave in pessoa6) {
  console.log(chave + ": " + pessoa6[chave]);
}

// ------------------------------------------------------------------ //
//exemplo completo de criação e manipulação de um objeto
console.log("\n---------------\n");

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  ligar: function () {
    return `O carro ${this.marca} ${this.modelo} está ligado.`;
  },
};

console.log(carro.ligar()); // "O carro Toyota Corolla está ligado."
carro.ano = 2021; // Atualizando o ano
console.log(carro.ano); // 2021

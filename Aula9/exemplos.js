//Estrutura de um objeto em JavaScript

const pessoa = {
  nome: "João",
  idade: 30,
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo",
    estado: "SP",
  },
};

// Acessando propriedades do objeto 'endereco'
console.log(pessoa.nome); // João
console.log(pessoa.endereco.rua); // Rua das Flores
console.log(pessoa.endereco.cidade); // São Paulo

// ------------------------------------------------------------------ //

// Array com vários objetos

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

// ------------------------------------------------------------------ //
//Objetos contendo objetos

const empresa = {
  funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
  funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
  funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" },
};

// Acessando os objetos dentro do objeto 'empresa'
console.log(empresa.funcionario1.nome); // Ana
console.log(empresa.funcionario2.cargo); // Professor
console.log(empresa.funcionario3.idade); // 22

// ------------------------------------------------------------------ //

const pessoa2 = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira",
    }
]
//Formas de acessar as propriedades de um objeto
console.log(pessoa2.nome); // "João"
console.log(pessoa2.idade); // 30

//notação com colchetes
console.log(pessoa2["profissao"]); // "Desenvolvedor"

// ------------------------------------------------------------------ //
// Adicionando objetos dentro de objetos

const pessoa3 = {
    nome: "Ana",
    idade: 25
  };
  
  // Adicionando o objeto 'endereco' depois
  pessoa3.endereco = {
    rua: "Avenida Central",
    numero: 456,
    cidade: "Rio de Janeiro",
    estado: "RJ"
  };
  
  console.log(pessoa3.endereco.cidade); // Rio de Janeiro

// ------------------------------------------------------------------ //

// Adicionando um objeto novo ao array

  const pessoas2 = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",
      idade: 35,
      profissao: "Professor"
    },
  ];
  pessoas2.push({
    nome: "Pedro",
    idade: 40,
    profissao: "Médico"
  });
  
  console.log(pessoas2[2].nome); // Pedro

// ------------------------------------------------------------------ //
//removento um objeto

  const empresa1 = {
    nome: "Tech Solutions",
    fundacao: 2010,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
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

// ------------------------------------------------------------------ //
// mesclar objetos

const pessoa3 = {
    nome: "João",
    idade: 30
  };
  
  const novoEndereco = {
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  };
  
  // Mesclando o novo objeto 'endereco' no objeto 'pessoa'
  Object.assign(pessoa3, novoEndereco);
  
  console.log(pessoa3);
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

// ------------------------------------------------------------------ //
// criar um array com as chaves de um objeto

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']


// ------------------------------------------------------------------ //
//extrair um array com os valores de um objeto

const person1 = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const values = Object.values(person);
console.log(values); // ['John', 30, 'New York']

// ------------------------------------------------------------------ //
//verificando se uma propriedade existe dentro do objeto

let pessoa4 = {
    nome: "João",
    idade: 30,
    saudacao: function() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
};
console.log("nome" in pessoa); // true
console.log("sobrenome" in pessoa); // false

//outra maneira de verificar se o objeto possui uma propriedade especifica 
console.log(pessoa4.hasOwnProperty("idade")); // true

// ------------------------------------------------------------------ //
//percorrendo um objeto com for...in

let pessoa5 = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
  };
  for (let chave in pessoa5) {
    console.log(chave + ": " + pessoa5[chave]);
  }

// ------------------------------------------------------------------ //
//exemplo compreto de criação e manipulação de um objeto

  let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    ligar: function() {
      return `O carro ${this.marca} ${this.modelo} está ligado.`;
    }
  };
  
  console.log(carro.ligar()); // "O carro Toyota Corolla está ligado."
  carro.ano = 2021; // Atualizando o ano
  console.log(carro.ano); // 2021
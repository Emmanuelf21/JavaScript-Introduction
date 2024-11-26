//Seleciona o título e altera o texto
const titulo = document.querySelector("#titulo");
titulo.innerText = "DOM em Ação";

//Seleciona a lista ul e cria um item novo como filho
const lista = document.querySelector("ul");
const novoItem = document.createElement("li");

novoItem.innerText = "Item 3";
lista.appendChild(novoItem);

const banana = document.createElement("li");

banana.innerText = 'banana';
lista.appendChild(banana);
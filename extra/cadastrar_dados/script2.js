let btnCadastrar = document.querySelector(".cadastrar");
let array = [];
let id = 0;
let tabela = document.querySelector(".tabela");

btnCadastrar.addEventListener("click", () => cadastrarDados());
function cadastrarDados() {
  let evento = document.querySelector("#evento").value;
  let preco = document.querySelector("#preco").value;
  array.push({ 'id': id, 'evento': evento, 'preco': preco });
  add();
}

function add() {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdEvento = document.createElement("td");
  let tdPreco = document.createElement("td");
  let tdBtns = document.createElement("td");
  
  let btnEditar = document.createElement("button");
  btnEditar.classList.toggle("editar");
  btnEditar.innerText = "Editar";

  let btnExcluir = document.createElement("button");
  btnExcluir.classList.toggle("excluir");
  btnExcluir.innerText = 'Excluir';

  for(let i=0; i<array.length; i++){
    tdId.innerText = array[i].id;
    tdEvento.innerText = array[i].evento;
    tdPreco.innerText = array[i].preco;
    tdBtns.append(btnEditar, btnExcluir);
  
    tr.append(tdId, tdEvento, tdPreco, tdBtns);
  }

  tabela.appendChild(tr);
}


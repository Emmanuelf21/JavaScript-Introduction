let btnCadastrar = document.querySelector(".cadastrar");
let array = [];
let id = 0;
let tabela = document.querySelector(".tabela");

btnCadastrar.addEventListener("click", () => cadastrarDados());
function cadastrarDados() {
  let evento = document.querySelector("#evento").value;
  let preco = document.querySelector("#preco").value;
  array.push({ id: id, evento: evento, preco: preco });
  id++;
  add();
}

function add() {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdEvento = document.createElement("td");
  let tdPreco = document.createElement("td");
  let tdBtns = document.createElement("td");
  let pos = array.length - 1;

  let btnEditar = document.createElement("button");
  btnEditar.classList.toggle("editar");
  btnEditar.innerText = "Editar";
  btnEditar.id = array[pos].id;

  let btnExcluir = document.createElement("button");
  btnExcluir.classList.toggle("excluir");
  btnExcluir.innerText = "Excluir";
  btnExcluir.id = array[pos].id;

  btnEditar.addEventListener("click", () => editarDados(btnEditar.id));
  btnExcluir.addEventListener("click", () => excluirDados(btnExcluir.id));

  tdId.innerText = array[pos].id;
  tdEvento.innerText = array[pos].evento;
  tdPreco.innerText = array[pos].preco;
  tdBtns.append(btnEditar, btnExcluir);

  tr.append(tdId, tdEvento, tdPreco, tdBtns);

  tabela.appendChild(tr);
}

function editarDados() {}

function excluirDados(idRecebido) {
  for (let i = 0; i < array.length; i++) {
    if (idRecebido == array[i].id) {
      array.splice(i, 1);
      break;
    }
  }
  gerarTabela();
}

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
  gerarTabela();
  eventoBtnEditar();
}

function editarDados(idBtn) {
  let novoEvento = document.querySelector("#eventoAtualizado").value;
  let novoPreco = document.querySelector("#precoAtualizado").value;

  for (const element of array) {
    if (element.id == idBtn) {
      element.evento = novoEvento;
      element.preco = novoPreco;
    }
  }
  document
    .querySelector("#alterarEventos")
    .classList.replace("visivel", "oculto");

  tabela.innerHTML = "";
  gerarTabela();
  eventoBtnEditar();
}

function excluirDados(idRecebido) {
  for (let i = 0; i < array.length; i++) {
    if (idRecebido == array[i].id) {
      array.splice(i, 1);
      break;
    }
  }
  tabela.innerHTML = "";
  gerarTabela();
  eventoBtnEditar();
}

function gerarTabela() {
  let cabecalho = `<tr>   
            <th>ID</th>
            <th>Evento</th>
            <th>Preço</th>
            <th>Ações</th>
        </tr>`;

  tabela.innerHTML = cabecalho;
  for (const element of array) {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdEvento = document.createElement("td");
    let tdPreco = document.createElement("td");
    let tdBtns = document.createElement("td");

    let btnEditar = document.createElement("button");
    btnEditar.classList.toggle("editar");
    btnEditar.innerText = "Editar";
    btnEditar.id = element.id;
    btnEditar.value = element.id;

    let btnExcluir = document.createElement("button");
    btnExcluir.classList.toggle("excluir");
    btnExcluir.innerText = "Excluir";
    btnExcluir.id = element.id;

    btnExcluir.addEventListener("click", () => {
      excluirDados(btnExcluir.id);
    });

    tdId.innerText = element.id;
    tdEvento.innerText = element.evento;
    tdPreco.innerText = element.preco;
    tdBtns.append(btnEditar, btnExcluir);

    tr.append(tdId, tdEvento, tdPreco, tdBtns);

    tabela.appendChild(tr);
  }
}

function eventoBtnEditar() {
  let btns = document.querySelectorAll(".editar");
  for (const btn of btns) {
    btn.addEventListener("click", () => {
      let btnAlterar = document.querySelector(".atualizar");
      btnAlterar.value = btn.value;

      document
        .querySelector("#alterarEventos")
        .classList.replace("oculto", "visivel");
    });
  }
}

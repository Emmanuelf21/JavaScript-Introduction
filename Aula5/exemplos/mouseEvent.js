const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

botao.addEventListener("mouseover", () =>{
    botao.style.cursor = 'pointer';
    if (caixa.classList.contains("oculto")) {
        // Troca a classe para "oculto"
        caixa.classList.replace("oculto", "visivel");
    }
});

botao.addEventListener("mouseout", ()=>{
    if (caixa.classList.contains("visivel")) {
        // Troca a classe para "oculto"
        caixa.classList.replace("visivel", "oculto");
    }
});
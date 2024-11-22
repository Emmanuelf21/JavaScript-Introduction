let prompt = require("prompt-sync")()

let nome = prompt("Digite seu nome:")
let horario = prompt("É manha, tarde ou noite?")

if (horario == "manha"  || horario == "tarde" || horario == "noite")
{
   if (horario == "manha"){console.log(`Bom dia ${nome}`);}
   if(horario == "tarde"){console.log(`Boa tarde ${nome}`);}
   if(horario == "noite"){console.log(`Boa noite ${nome}`);}
}
else {console.log("Opção inválida!!")}
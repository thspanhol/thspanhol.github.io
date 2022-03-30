let barra = document.getElementById("barra");
let btn = document.getElementById("btn");
let lista = document.getElementById("lista");
let texto = "";
let div = document.getElementById("cont");

function tarefa() {
  texto = barra.value;
  lista.appendChild(document.createElement("li")).innerText = texto;
  barra.value = "";
  riscaLista();
}

// btn.addEventListener("click", tarefa);


function risca(evento) {
  if(evento.target.className != "riscado"){
    evento.target.className = "riscado";
  }
  else if(evento.target.className == "riscado"){
    evento.target.className = "";
  }
}

function riscaLista() {
  for (i = 0; i < document.getElementsByTagName("li").length; i += 1) {
    document.getElementsByTagName("li")[i].addEventListener("dblclick", risca);
  }
}

// function apagaRisco() {
//   for (i = 0; i < document.getElementsByTagName("li").length; i += 1) {
//     if (document.getElementsByTagName("li")[i].className == "riscado") {
//       document.getElementsByTagName("li")[i].removeChild;
//     }
//   }
// }

function enter(e) {
  if (e.key === "Enter") {
    texto = barra.value;
    lista.appendChild(document.createElement("li")).innerText = texto;
    barra.value = "";
    riscaLista();
  }
}

barra.addEventListener("keypress", enter);

let valores = [];
const lista = document.getElementById("listaTarefas");
const quantidade = document.getElementById("qtd_tarefas");
const concluidas = document.getElementById("qtd_concluidas");
const pendentes = document.getElementById("qtd_pendentes");

function add_tarefa() {

    let input = document.getElementById("tarefa");
    let n1 = input.value;

    if (n1 === '') {

        alert("Conteúdo inválido");

    } else if (valores.indexOf(n1) != -1) {

        alert("Tarefa repetida, por favor digite outra tarefa");

    } else {

        valores[valores.length] = n1;

        let li = document.createElement("li");

        li.innerHTML = n1;

        lista.appendChild(li);

        let span = document.createElement("span");

        span.innerHTML = "\u00d7";

        li.appendChild(span);

        atualizarQuantidade();
    }

    input.value = '';
    input.focus();
}


lista.addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        atualizarQuantidade();
    } 
    
   else if (e.target.tagName === "SPAN") {
    let li = e.target.parentElement;
    let indice = Array.from(lista.children).indexOf(li);

    valores.splice(indice, 1);
    li.remove();
    atualizarQuantidade();
}

});

function atualizarQuantidade() {
    let tarefasConcluidas = document.querySelectorAll("#listaTarefas li.checked").length;

    let tarefasPendentes = valores.length - tarefasConcluidas;
    quantidade.innerHTML =
        `Quantidade de tarefas: ${valores.length}`;

    concluidas.innerHTML =
        `Concluídas: ${tarefasConcluidas}`;

    pendentes.innerHTML =
        `Pendentes: ${tarefasPendentes}`;
}

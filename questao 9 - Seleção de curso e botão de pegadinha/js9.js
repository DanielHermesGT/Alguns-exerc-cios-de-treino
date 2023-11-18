function mudou(){

    let selec = document.getElementById("opcoes")
    let teste = document.getElementById("teste")

   
    if(selec.value == "Informatica"){
        teste.innerHTML = "Melhor Curso selecionado"
    }
    if(selec.value == "Mecanica"){
        teste.innerHTML = "Curso interessante"
    }
    if(selec.value == "Eletro"){
        teste.innerHTML = "Curso Legal"
    }
    if(selec.value == ""){
        teste.innerHTML = "Nenhum"
    }
}
function movase(){
let botao = document.getElementById("rand")

    botao.style.top = Math.floor(Math.random() * 500) + "px"
    botao.style.left = Math.floor(Math.random() * 500) + "px"
    botao.innerHTML = "Te enganei hehe"

}
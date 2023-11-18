function clicouu(){
    let inputs = document.querySelectorAll("input")
    let label = document.querySelectorAll("label")
    const lista = []
    for(let i = 0; i < 4; i++){
        
        if(inputs[i].value == ""){
            lista.push(label[i].innerHTML)            
            inputs[i].style.borderColor = 'red'
        }
    }

    for(let i = 0; i < lista.length; i++){
        window.alert("confirme: "+ lista[i])
    }
}

function enviado(){
    let inputs = document.querySelectorAll("input")
    
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ''){
            alert(inputs[i].name + " Campo vazio!")
        }
    }
    if(inputs[0].value != ''){
        if(inputs[0].value.length <= 7 ){
            alert("Nome possui menos que 8 caracteres!")
        }
    }
    if(inputs[1].value != ''){
        if(inputs[1].value.length <= 5){
            alert("Senha possui menos que 6 caracteres!")
        }else{
            if(inputs[1].value != inputs[2].value){
                alert("Senhas nao batem!")
            }
        }
    }
    
   
}
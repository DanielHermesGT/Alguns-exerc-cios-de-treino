function Teste(){
    let email = document.getElementById("email")
    let p = document.getElementById("espaço")
    if(email.value == '') {
        email.style.border = "1px solid red"
        p.innerHTML = "Campo não preenchido!"
        p.style.color = 'red'
    }else{
        if(email.value.length <= 5){
            email.style.border = "1px solid red"
            p.innerHTML = "Numero de caracteres inferior a 6"
            p.style.color = 'red'
        }else{
            if(email.value.indexOf("@") == -1){
                email.style.border = "1px solid red"
                p.innerHTML = "@ Não encontrado!"
                p.style.color = 'red'
            }else{
                if(email.value.indexOf(".") == -1){
                    email.style.border = "1px solid red"
                    p.innerHTML = ". Não encontrado!"
                    p.style.color = 'red'
                }else{
                    email.style.border = "1px solid green"
                    p.innerHTML = " Tudo Certo!"
                    p.style.color = 'green'
                }
            }
        }
    }
}
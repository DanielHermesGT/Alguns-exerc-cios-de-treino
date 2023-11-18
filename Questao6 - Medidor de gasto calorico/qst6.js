function cal(){

    let temp = document.getElementById("tempo").value
    let peso = document.getElementById("peso").value
    let atv = document.getElementsByName("atv")
    let resultado
    for(let i = 0; i < atv.length; i++){
        if(atv[i].checked){
            console.log(atv[i].value)
            console.log(temp)
            console.log(peso)
            
        resultado = peso * temp * atv[i].value * 0.0175
        }
    }
    document.getElementById("mensagem").innerHTML = " Resultado: " + resultado
}
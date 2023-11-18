/*Crie a função calculadora() que considera os objetos do formulário (dois valores e a operação que pode
ser +, -, * ou /). A função deve fazer o cálculo correspondente a operação e mostrar o resultado em uma caixa
de alerta. Considere um formulário como da figura abaixo. Faça a chamada da função no evento onclick do
botão*/

function clicouu(){
    let inputs = document.querySelectorAll("input")
    let x = document.getElementById("numero1").value
    let y = document.getElementById("numero2").value

    let xs = Number(x)
    let ys = Number(y)
    for(let i = 0; i < inputs.length; i++)
    if(inputs[i].checked){
        switch(inputs[i].value){
            case "soma":
                let somas = xs + ys
                window.alert("A soma é: "+ somas)
            break;
            case "sub":
                let subs = xs - ys
                window.alert("A soma é: "+ subs)
            break;
            case "mult":
                let multi  = xs * ys
                window.alert("A soma é: "+ multi)
            break;
            case "divi":
                let divis = xs / ys
                window.alert("A soma é: "+ divis)
            break;
            
        }
    }
}
/*Faça um código JavaScript que mostra uma caixa de diálogo (prompt) para o usuário informar sua idade.
Se o usuário informar uma idade menor que 18 mostrar em uma caixa de alerta a mensagem “Menor de
idade”. Se o usuário informar um valor maior ou igual a 18, mostrar mensagem “Maior de idade”.*/
function clicou(){    
   let idade = window.prompt("Digite sua idade: ");

   if(idade >= 18){
    window.alert("Maior de idade")
   }else{
    window.alert("Menor de idade")
   }
}
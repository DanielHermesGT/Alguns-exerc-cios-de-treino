function novoped(){

    let formulario = document.querySelector("#form")
    let inputdata = document.createElement("input")
    let div = document.createElement("div")
    
    inputdata.id = "data"
    inputdata.name = "data"
    
    formulario.appendChild(inputdata)

    let inputnome = document.createElement("input")
    inputnome.id = "nome"
    inputnome.name = "nome"
    inputdata.placeholder = "Digite o Nome"
    formulario.appendChild(inputnome)
    
    let inputpedido = document.createElement("input")
    inputpedido.id = "pedido"
    inputpedido.name = "pedido"
    inputdata.placeholder = "Digite o Pedido"
    formulario.appendChild(inputpedido)
    
    let inputpagamento = document.createElement("input")
    inputpagamento.id = "pagamento"
    inputpagamento.name = "pagamento"
    inputdata.placeholder = "Forma de Pagamento"
    formulario.appendChild(inputpagamento)

}
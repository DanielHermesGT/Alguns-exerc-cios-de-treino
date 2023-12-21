const ptemp = document.getElementById("p_temp")
const pnivel = document.getElementById("p_nivel")
const ppress = document.getElementById("p_pressao")


const obterdado = () =>{
    const url = "url"
    fetch(url, /*(method: "get") define qual o metodo que o fetch usara*/)
    .then(resp=>resp.json()) //transforma em json e o resp antes da flexa
    //simboliza o parametro de uma função, cmo por exemplo (resp)
    .then(dados=>{ //é o que recebe apos o .then anterior
        console.log(dados) //ve os dados que retorna
        ptemp.innerHTML = dados.temperatura //temperatura é a chave que vem da API

    })
}

obterdado()

//consumo methodo get
//envio de dados post

let dados={ //obj dados que recebe os dados que quer gravar
//o que vou passar para a API
    nome:"Bruno",
    Canal: "CFBCuros",
    curso: "Javascript"
}

let cabecalho={
    method: "POST",
    body:JSON.stringify(dados) //passas os dados do obj dados para o body da api
}

const gravarDados=() =>{
    const url2 = "url"
    fetch(url2, cabecalho)
    .then(resp=>resp.json())
    .then(resp=>{
        console.log(resp)
    })
}
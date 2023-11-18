
let vari = 0
let vezesqueclicou = 0
        
function clicou(){
    let nao = document.getElementById("nao")

    nao.style.top = Math.floor(Math.random() * 500) + "px"
    nao.style.left = Math.floor(Math.random()* 500) + "px"
    if(vari >= 1){
        nao.innerHTML = "não tem mais volta!"
    }
    if( vezesqueclicou == 19){
        const tempo = [1, 2, 3]
        for(i = 0; i < 3; i++){
            window.alert("ah é? auto destruição em: " + (tempo[2] - i))
        }
        for(i = 0; i < 2; i++)
        document.getElementsByTagName("button")[i].style.display = 'none'
        if(i==2)
        document.querySelector("h1").style.display = 'none'
        document.querySelector("body").style.backgroundColor = 'black'
    }
    
    vezesqueclicou++
}
    let clicoutest = 0;

function clicou2(){
    document.getElementById("h1").innerHTML = "Otima escolha! "
    if(clicoutest == 0){
        h1novo = document.createElement("h1")
        h1novo.innerHTML ="Voce acaba de se tronar um DEV"
        document.getElementById("textos").appendChild(h1novo)  
    }
    clicoutest++
    vari++;
}

const botoes = document.querySelectorAll("button")
const divs = document.querySelectorAll("div")
    function func(){
    
    for(let i = 0; i < botoes.length; i++){
        if(botoes[i].id != "meio"){
            if(botoes[i].style.display == 'none'){
                botoes[i].style.display = 'inline'
            }else{
                if(botoes[i].style.display == 'inline'){
                    botoes[i].style.display = 'none'
                }
            }
        }
    }
}
for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("mouseover", function() {
        divs[i].style.outline = '4px solid aqua'
        divs[i].style.borderRadius = '50%'
    })
    botoes[i].addEventListener("mouseout", function() {
        divs[i].style.outline = ''
        divs[i].style.borderRadius = ''
        divs[i].style.padding = ''
    })
}
// let promessa = new Promise((resolve, reject)=>{
//     let resultado = true
//     let tempo = 3000
//     setTimeout(()=>{
//         if(resultado == true){
//             resolve("deu tudo certo")
//         }
//         if(resultado == false){
//             reject("deu tudo errado")
//         }
//     }, tempo)
// })

// promessa.then((retorno)=>{
//     console.log(retorno)
// })
// promessa.catch((retorno)=>{
//     console.log(retorno)
// })

//adicionando a promisse em uma funçao especifica! --<>colar num evento


// let numero = document.getElementById("numero")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", (evt) =>{
//     numero.innerHTML="processando"
//     let promessa = new Promise((resolve, reject)=>{
//         let resultado = true
//         let tempo = 1000
//         setTimeout(()=>{
//             if(resultado == true){
//                 resolve("deu tudo certo")
//             }
//             if(resultado == false){
//                 reject("deu tudo errado")
//             }
//         }, tempo)
//     })
    
//     promessa.then((retorno)=>{
//         numero.innerHTML = retorno
//         numero.classList.remove("erro")
//         numero.classList.add("ok")
//     })
//     promessa.catch((retorno)=>{
        
//         numero.innerHTML=retorno
//         numero.classList.add("erro")
//         numero.classList.remove("ok")
//     })
    
    
//     numero.innerHTML="esperando" 
// })

//adicionando a promisse em uma funçao especifica! --<>adicionando em uma funcao

// const numero = document.getElementById("numero")
// const btn = document.getElementById("boot")

// btn.addEventListener("click", (evt) =>{
//     numero.innerHTML = "processando"
//     promessa()
// })

// const promessa = ()=>{
//     let promessa = new Promise((resolve, reject)=>{
//                 let resultado = true
//                 let tempo = 1000
//                 setTimeout(()=>{
//                     if(resultado == true){
//                         resolve("deu tudo certo")
//                     }
//                     if(resultado == false){
//                         reject("deu tudo errado")
//                     }
//                 }, tempo)
//             })
            
//             promessa.then((retorno)=>{
//                 numero.innerHTML = retorno
                
//             })
//             promessa.catch((retorno)=>{
                
//                 numero.innerHTML=retorno
                
//             })
// }

// numero.innerHTML="esperando"

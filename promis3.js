function contar(n){
    let cont=0
    for(let i = 0; i <n; i++){
        cont++
    }
    return cont
}

function contarT(n){
    let cont=0
    let t =setTimeout(()=>{
        for(let i = 0; i <n; i++){
            cont++
        }
        
    }, 2000)
    return cont
    
}

function contarP(n){
    let cont=0
    let promessa = new Promise((resolve, reject)=>{
        for(let i = 0; i <n; i++){
            cont++
        }
        if(cont == n){
            resolve(cont)
        }else{
            reject("Error")
        }
    })
    return promessa
}

function contarPT(n){
    let cont=0
    let promessa = new Promise((resolve, reject)=>{
        let t = setTimeout(()=>{    
            for(let i = 0; i <n; i++){
                cont++
            }
            if(cont == n){
                resolve(cont)
            }else{
                reject("Error")
            }
        }, 3000)
        
    })
    return promessa
}


    function somaPositivos(n1, n2){
        let p = new Promise((resolve, reject) =>{
            if(n1 >=0 && n2>=0){
                resolve(n1+n2)
            }else{
                reject("Erro")
            }
        })
        return p
    }


     console.log(contar(100000))
      console.log(contarT(10))
           
      contarPT(10)
            .then(sucesso => console.log("sucesso: " + sucesso))
           .catch(erro => console.log("error" + erro))
    // somaPositivos(10,2)
    //     .then(sucesso => console.log("Sucesso: " + sucesso))
    //     .catch(erro => console.log(erro))

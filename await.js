function primeirafuncao(){

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("esperou isso aqui")
            resolve()
        }, 1000)
    })
}

async function segundafunc(){ // necessita o async

    console.log("iniciou")

    await primeirafuncao() //await define o que esprar

    console.log("terminou")
}

segundafunc()



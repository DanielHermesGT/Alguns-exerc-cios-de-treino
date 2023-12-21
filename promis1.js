
const mypromise = new Promise((resolve, reject) => {

    const nome = "Matheus"

    if(nome == "Matheus"){
        resolve("Usuario Matheus encontrado!")
    }else{
        reject("usuario Matheus nao foi encontrado!")
    }
})

mypromise.then((data)=>{ //depois/ entao faça
    console.log(data) //Só é executada apos o then
})

// encadeamento de Then's

const mypromise2 = new Promise((resolve, reject) => {

    const nome = "Matheus"

    if(nome == "Matheus"){
        resolve("Usuario Matheus encontrado!")
    }else{
        reject("usuario Matheus nao foi encontrado!")
    }
})

mypromise2.then((data)=>{ //depois/ entao faça
    return data //Só é executada apos o then
}).then((stringmod) =>{
    console.log(stringmod)
})

//reject - catch

const mypromise3 = new Promise((resolve, reject) => {

    const nome = "joao"

    if(nome == "Matheus"){
        resolve("Usuario Matheus encontrado!")
    }else{
        reject("usuario Matheus nao foi encontrado!")
    }
})

mypromise3.then((data)=>{ //depois/ entao faça
    console.log(data) //Só é executada apos o then
}).catch((error)=>{
    console.log("houve um erro: " + error)
})

//varias promessas de uma vez só

const p1 = new Promise((resolve, reject)=>{
    resolve("P1 Ok")
})
const p2 = new Promise((resolve, reject)=>{
    resolve("P2 Ok")
})
const p3 = new Promise((resolve, reject)=>{
    resolve("P3 Ok")
})

const resolveAll = Promise.all([p1, p2, p3]).then((data)=>{
    console.log(data)
})
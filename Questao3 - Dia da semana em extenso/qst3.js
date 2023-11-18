function data(){
    let datauser = document.getElementById("datauser").value
    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    const data = new Date(datauser)
    
    document.getElementById("mostrar").innerHTML = dias[data.getDay() + 1]
}   
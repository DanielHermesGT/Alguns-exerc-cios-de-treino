const input = document.querySelectorAll("input")


for(let i = 0; i < input.length; i++){
    input[i].addEventListener("click", function(evt){
        evt.target.style.backgroundColor = "red"
    })
}

// ou
// const input = document.querySelectorAll("input")

// // input.forEach(function(input) {
// //     input.addEventListener("click", function(){
// //         this.style.color = "red"
// //     })
// // })

// for(let i = 0; i < input.length; i++){
//     input[i].addEventListener("click", function(evt){
//         evt.target.style.backgroundColor = "red"
//     })
// }


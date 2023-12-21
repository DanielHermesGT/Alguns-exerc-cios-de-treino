var canva = document.querySelector("#canva")
var contx = canva.getContext("2d")

contx.beginPath()
contx.arc(95, 50, 40, 0, 2 * Math.PI)
contx.stroke()

contx.moveTo(0, 0)
contx.lineTo(200, 200)
contx.stroke()
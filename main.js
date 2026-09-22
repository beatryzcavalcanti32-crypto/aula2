/*MODELO 1: FUNÇÕES
var a = 5
var b = 7
var c = a+b
}

/*MODELO 2: FUNÇÕES
var a = 3
var b = 4
function somar (x,y){
    var c = x+y
    return c
}

console.log(somar(a,b))
FIM MODELO 2*/

/*MODELO 3: TIPOS DE VARIÁVEIS
var a = 0
let b = 0
const d = 0


function somar (x,y){
    let c = x+y
    return c
}

FIM MODELO 3*/


const f = document.getElementById("formulario")

f.addEventListener("submit", function(e){
    e.preventDefault();

    const v1 = Number(document.getElementById("num1").value)
    const v2 = Number(document.getElementById("num2").value)

    const soma = v1+v2

    document.getElementById("resultado").textContent=soma

})
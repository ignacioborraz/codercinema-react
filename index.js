//el programa lee el codigoJS línea por línea

//las variables se definen como espacios reservados para guardar algo (textos, numeros y otras elementos que veremos más adelantes)

//variables LET y VAR se pueden modificar (la diferencia entre una y otra es el alcance/scope que veremos más adelante, pero por ahora funcionan de la misma forma)
//variables CONST por ahora no se pueden modificar

//definir una variable
let cadenaDeTexto0 = 'camelCase'
var cadenaDeTexto1 = "es una forma de escribir el NOMBRE de las Variables"
var numero0 = "1000"
let numero1 = 12
const numero2 = 78

//pedirle al usuario que defina una variable
//let nombreUsuario = prompt("POR FAVOR: escriba su nombre")

//ver resultados en la consola del navegador
console.log(cadenaDeTexto0)
console.log(numero1)
//console.log(nombreUsuario)


// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

//reasignar una variable (la invoco y le paso el nuevo valor)
numero1 = 5
//console.log(numero1)

//operador aritmetico (SUMA)
numero1 = numero1 + 4
//console.log(numero1)

//operador de asignación (SUMA)
numero1 += 4
//console.log(numero1)

//operador de asignación (RESTA)
numero1 -= 8
//console.log(numero1)

//operador de asignación (PRODUCTO)
numero1 *= 3
//console.log(numero1)

//operador de asignación (SUMA de variable)
numero1 += numero2
console.log(numero1)

//operador de asignación (SUMA de variable) => ERROR
//numero2 += numero1
//console.log(numero2)

//varias operaciones en la misma línea
//los () describen mejor las operaciones pero no siempre son necesarios
//numero1 = numero1/numero2
//console.log(numero1)

//redondear a entero
//console.log(parseInt(numero1))

//concatenar str+num
//numero1 += numero0
//console.log(numero1)

//concatenar str+num
numero0 += numero1
console.log(numero0)

//concatenar strings
//var frase = cadenaDeTexto0 + ": " + cadenaDeTexto1
//console.log(frase)

//concatenar frase+num
//frase += numero4
//console.log(frase)

//concatenar frase+num
//numero3 += frase
//console.log(numero3)

//generar una plantilla/template
//let templateString = `           este es el numero   `
//console.log(templateString)

//METODOS
//longitud
//let longitud = templateString.length
//console.log(longitud)

//quitar espacios inicio&fin
//let sinEspacios = templateString.trim()
//console.log(sinEspacios)

//convertir a minusculas
//let minusculas = sinEspacios.toLowerCase()
//console.log(minusculas)

//convertir a mayusculas
//let mayusculas = sinEspacios.toUpperCase()
//console.log(mayusculas)

//obtener la primer letra
//let primeraLetra = sinEspacios.charAt(0)
//console.log(primeraLetra)

//obtener la letra que sea
//let otraLetra = sinEspacios.charAt(6)
//console.log("esta es otra letra de la frase: "+otraLetra)

//recortar una frase desde alguna letra en particular
//let restoFrase = sinEspacios.slice(1)
//console.log(restoFrase)

//varios metodos juntos
//console.log(primeraLetra.toUpperCase()+restoFrase.toLowerCase())

//preguntar si incluye algo
//let incluye1 = sinEspacios.includes("esta")
//console.log(incluye1)
//let incluye2 = sinEspacios.includes("este")
//console.log(incluye2)

//preguntar si empieza con algo
//let empiezaCon1 = sinEspacios.startsWith("esta")
//console.log(empiezaCon1)
//let empiezaCon2 = sinEspacios.startsWith("este")
//console.log(empiezaCon2)
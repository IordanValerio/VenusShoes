//array and objects

let animal = [
  {
    class: "mouse",
    name: "Jerry",
    age: 2,
  },

  {
    class: "cat",
    name: "Tom",
    age: 3,
  },

  {
    class: "dog",
    name: "Spike",
    age: 4,
  },
]

console.log(`My ${animal[1].class} is named ${animal[1].name}`)

console.log(`there is a ${animal[0].class} here`)

console.log("there are " + animal.length + " animals here")

console.log(
  "I have " +
    animal.length +
    " animals and my dog " +
    animal[2].name +
    " has " +
    animal[2].age +
    " years old",
)

console.log("My " + animal[0].class + " is named " + animal[0].name)

//simple array

let color = ["yellow", "blue", "red", "green"]

console.log(`My house is ${color[3]}`)

//Loops (for) Ex. 1: Objects inside an array

let livros = ["O Estrangeiro", "Monte Cristo", "Os Miseráveis"]

for (let i = 0; i < livros.length; i++) {
  console.log(livros[i])
}

//Loops (for) Ex. 2: Objects inside an array

for (let i = 0; i < animal.length; i++) {
  console.log(`The ${animal[i].class} is named ${animal[i].name}`)
}

let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador"]

for (let i = 0; i < 4; i++) {
  console.log(cidades[i])
}

//ForEach

const nomes = ["Ana", "Bia", "Carlos", "Daniel"]

for (let i = 0; i < nomes.length; i++) {
  console.log("Seu nome é " + nomes[i] + " e seu índice é " + i)
}

//Exercício de lógica: Montar um programa que verifica se um número é divisível por outro)
let number1, number2

number1 = 20
number2 = 5

if (number1 % number2 === 0) {
  console.log("É divisivel")
} else {
  console.log("Não é divisivel")
}

let nome = "Maria"
let idade = 19
let estudando = true
if (estudando === true) {
  console.log("Sim")
}
console.log(`${nome} tem ${idade} anos, ele está estudando? ${estudando}`)

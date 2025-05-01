const numeros = [1,2,3,4,5,]
const valoresDobrados = numeros.map(num => num *2)

// console.log(valoresDobrados)
// console.log(numeros)

const usuarios = [
    {
        nome:"joaoa",
        idade:52
    },
    {
        nome:"maria",
        idade:473
    },
    {
        nome:"joana",
        idade:2
    }
]

const nomesUsuario = usuarios.map(usuario => usuario.nome)

console.log("nomes de usuario",nomesUsuario)
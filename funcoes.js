// function saudacao(){
//     console.log("Bom dia!")
// }

//arrow funtioon com parâmetro

// const saudacao = (turno,nome="joao")=>{
//     console.log(`${turno} ${nome}`)
// }

// saudacao("bom dia", "igor")
// saudacao("boa noite")

// const soma = (x,y)=>{
//     return x+y
// }

const soma = (x,y)=> x+y

const subtracao = (x,y)=> x-y

const multiplicacao = (x,y)=> x*y

const divisao = (x,y)=> x/y

// const calculo = (x,y,z,a)=>{
//     return soma(x,y) + multiplicacao(z,a)
// }

// const resultadoDoCalculo = calculo (10,5,901,7)

// console.log("resultado do calculo ",resultadoDoCalculo)

//retornar o valor de varias funcoes em um return

// const calculo = (x,y)=>{
//     return{
//         soma: soma(x,y),
//         subtracao: subtracao(x,y),
//         multiplicacao: multiplicacao(x,y),
//         divisao: divisao(x,y),
//     }
// }

// const resultadoFinalDoCalculo = calculo(20,10)

// console.log("Resultado final",resultadoFinalDoCalculo)

//escopo global e local (de bloco ou função)

const escopoGlobal = "escopo global"

function chamaEscopo(){
    const escopoLocal = "Escopo Local"
    console.log(escopoGlobal)
}

console.log(escopoLocal)
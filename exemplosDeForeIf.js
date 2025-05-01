// let num = 10
// // num = num + 5

// num +=5

//imprime multiplos de 5 de 0 a 100, excluido o 0
// for (let i = 0; i <= 100; i += 5){
//     if(i >0 ){
//         console.log(i)
//     }
// }

//soma se os dois fvalores for maior que dez

// function somaSeMaiorQue10(a, b){
//     if(a>10 && b> 10){
//         return a + b;
//     } else {
//         return "numeros insuficientes"
//     }
// }

// console.log(somaSeMaiorQue10(52,11))


//calcula media
// function verificaMedia(notas){
//     let soma = 0;
//     for(let i = 0; i < notas.length ; i++){
//         soma += notas [i]
//     }
//     const media = soma / notas.length
//     return media >= 7 ? "aprovado" : "reprovado"
// }

// console.log(verificaMedia([8,8,8,8]))


// let vogais = ["a","e","i","o","u"]
// let verificaVogalEmArray = vogais.includes("t")

// console.log(verificaVogalEmArray)

// let palavra = "texto"
// let palavraConvertidaEmCaixa = palavra.toUpperCase()

// console.log(palavraConvertidaEmCaixa)

// function contarVogais(palavra){
//     let vogais = ["a","e","i","o","u"]
//     let contador = 0

//     for(const letra of palavra.toLowerCase()){
//         if(vogais.includes(letra)){
//             contador ++
//         }
//     }
//     return contador
// }

// console.log(contarVogais ("javascript"))]

function verificarNumero(n){
    if(n>=10 && n <= 100 && n % 5 === 0){
         return "numero valido"
    } else {
        return "Numero invalido"
    }
}

console.log(verificarNumero(11))

function mediaNota(x){
    if(x >= 7){
        return "Aprovado"
    } else {
        return "Reprovado"
    } 
}

const verificarNota = mediaNota(6)

console.log("O aluno foi",verificarNota)
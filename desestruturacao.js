const notaMatematica = {
    primeiroTriemeste: 6,
    segundoTrimestre:8,
    terceiroTrimestre:9,
}

const {primeiroTriemeste,segundoTrimestre,terceiroTrimestre} = notaMatematica

const mediaDeMatematica = ((primeiroTriemeste + segundoTrimestre + terceiroTrimestre) / 3).toFixed(1)

if(mediaDeMatematica >= 7){
    console.log("aprovado")
}else{
    console,log("Reprovado")
}


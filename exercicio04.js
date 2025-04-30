const faturamentoMes = {
    primeiroMes: 10650,
    segundoMes:20000,
    terceiroMes:35000,
}

const {primeiroMes,segundoMes,terceiroMes} = faturamentoMes


const mediaFaturamento = (primeiroMes + segundoMes + terceiroMes) / 3

if (mediaFaturamento >= 25000){
    console.log("Atigiu a meta")
} else {
    console.log ("Não atingiu a meta")
}
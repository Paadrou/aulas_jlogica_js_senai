let contador = 0

const btnIncrementar = document.querySelector("#btnIncrementar")

const btnDimiuir = document.querySelector("#btnDiminuir")

const resultado = document.querySelector("#resultado")

btnIncrementar.addEventListener("click", ()=>{
    contador+=999999999999999999999
    resultado.textContent = `Contador: ${contador}`
})

btnDimiuir.addEventListener("click", ()=>{
    if(contador > 0 ){
        contador--
        resultado.textContent = `Contador: ${contador}`
    }
})
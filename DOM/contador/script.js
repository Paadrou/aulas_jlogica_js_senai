let contador = 0

const btnIncrementar = document.querySelector("#btnIncrementar")

const resultado = document.querySelector("#resultado")

btnIncrementar.addEventListener("click", ()=>{
    contador+=2
    resultado.textContent = `Contador: ${contador}`
})
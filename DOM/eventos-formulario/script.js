const inputForm = document.querySelector("#inputForm")

const botaoBusca = document.querySelector("#botaoBusca")

const resultado = document.querySelector("#resultado")

inputForm.addEventListener("keydown", (event) => {
    // console.log(event.key)
    // resultado.textContent = event.key
    if (event.key === "Enter") {
        botaoBusca.click()
    }
})

inputForm.addEventListener("focus", ()=> {
    inputForm.style.backgroundColor = "#FF0"
})

inputForm.addEventListener("blur", ()=> {
    inputForm.style.backgroundColor = ""
})



function searchResult() {
    const valorBusca = inputForm.value.trim()
    if (valorBusca) {
        resultado.textContent = `voce buscou por ${valorBusca}`
    } else {
        resultado.textContent = "por favor, insira algo na busca"
    }
}

botaoBusca.addEventListener("click", ()=>{
    searchResult()
})
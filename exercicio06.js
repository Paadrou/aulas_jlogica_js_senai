const produtos = [
    {
        nome:"fruki",
        preco:6.50,
        descricao:"tem cás dentro"
    },
    {
        nome:"medo abundante de todas as verdades",
        preco:2,
        descricao:"aerofolia para meu palio"
    },
    {
        nome:"ninfa",
        preco:2.50,
        descricao:"faz mal"
    }
]

const nomeProdutos = produtos.map(produto => produto.nome)

const precoProdutos = produtos.map(produto => produto.preco)

for (nome of nomeProdutos){
    console.log(nome)
}
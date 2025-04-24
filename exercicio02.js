const produto01 = {
    nome: "garrafa",
    preco: 5.00,
    quantidade: 3
}

const produto02 = {
    nome:"abridor",
    preco: 5.00,
    quantidade: 2
}

const preco01 = produto01.preco * produto01.quantidade

const preco02 = produto02.preco * produto02.quantidade

console.log(`O resultado da conta é ${preco01 + preco02}`)
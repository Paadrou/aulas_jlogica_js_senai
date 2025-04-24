// Crie uma variavel que seja um array de objeto que tenha os seguistes pares: chaves e valor

// nome da viriavel => users

// valores => um objeto com os valores login, password, cursos, sendo cursos um array com dois valores

//renderizar no console a seguinte frase com o primeiro user do array 'meu login é ${login}, minha senha é ${password}, e faço os cursos x e y

const users = [
    {
        login:'paadrou',
        password:'1234',
        cursos:['web', 'games']
    },
    {
        login:'jose',
        password:'1234',
        cursos:['desing', 'games']
    }
]

console.log(`meu login é ${users[0].login}, minha senha é ${users[0].password}, e faço os cursos ${users[0].cursos[0]} e ${users[0].cursos[1]}`)
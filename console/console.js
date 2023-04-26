
console.log ('Exibindo uma mensagem no console!');

console.error(new Error('Temos problemos!!!'))

const carros = ['GM', 'FIAT', 'FORD', 'VW', 'RENAULT', 'HONDA', 'HYUNDAI']

console.table(carros)

//criando objeto

const dados = { name: 'Yuki Junior', empresa: 'Yukhis'}

console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando o processo')
console.countReset('processo')

console.count('processo')

console.time('contador')
for (let index = 0; index < 100; index++) {
    console.log('-')    ;
    
}

console.timeEnd('contador')

console.assert(true,'Faça alguma coisa')

console.assert(false, 'Ih rapaz @#%, que pena','Não funcionou')

//limpa todo os dados do console
//console.clear()


const {EventEmitter}= require('events')

class Evento extends EventEmitter {}
const meuEvento = new Evento()

//subscriber - assinate
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento 'seguranca': ${x}, ${y}`);
})

//publisher -  emissor 
meuEvento.emit('seguranca', 'userAdimin', 'Alterou Salário')

meuEvento.on('Encerrar',(dados)=>{
    console.log('Assinante: '+ dados)
})
meuEvento.emit('Encerrar', 'Encerrando a importação dos dados!')

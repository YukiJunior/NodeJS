const fs = require ('fs');

const assetes = ['css','js','images','fonts', 'lib'];

function make(dir){
    
    dir.forEach((item)=>{
        fs.mkdir(`projeto/assetes/${item}`,{recursive: true},(err)=>{
            if(err)throw err;
            console.log(`Diretorio Criado com sucesso:`,item);

        });
    });  
}
make(assetes);  
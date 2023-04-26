
require('./subdirectory/sub');

console.log('-----------------------------------------------');
console.log(`Nome do Arquivo: `, __filename);
console.log(`Diretório do Arquivo: `,__dirname);
console.log(`Diretório em que foi invocado: `,process.cwd);
console.log(`Sistema Operacional: `,process.env.OS);
console.log(`Usuário no SO: `,process.USERNAME);
console.log(`Idioma:  `,process.env.LANG);
console.log(`Nome do Server: `,process.env.COMPUTERNAME);

switch(process.argv[2]){

    case '-a' :
        console.log('Encerrando Aplicação');
        console.log('execute rotina principal');
        break;
    case '-i': 
        console.log('Execute Instalação');
        break;
    case '-q': 
        process.exit();// interrompe imediatamente
        break;
    default:
        console.log('Parâmetro Inválido');
}
console.log(`Ambiente do Servidor: `,process.platform);

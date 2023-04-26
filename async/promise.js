
// promise

function soma(x){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(x + 5000);
    }, 3000); // tempo de intervalo do timeout
    })
}

soma(230)
.then((resultado)=>{
    console.log(`Resolvido, Resultado: ${resultado}`);
})

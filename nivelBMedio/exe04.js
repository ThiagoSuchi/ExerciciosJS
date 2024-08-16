// 04 - Escreva uma função que determine se um número é primo.

const argv = process.argv.slice(2)
let numero = parseInt(argv[0])

function numPrimo(num) {

    if(num <= 1) return false// se for menor ou igual a 1, o numero não é primo!
    for(let i = 2; i < num; i++){
        if(num % 2 === 0){// verifica se o resto da divisão entre o num e i(2) é 0, se for ele retorna false, ou seja, não é primo!
            return false
        }
    }
    
    return true// Caso não caia em nenhuma das condições retorna TRUE, que significa que é um número primo!
}


if(numPrimo(numero) === true){
    console.log(`o ${numero} fornecido é ${numPrimo(numero)}, ou seja, PRIMO.`);
} else {
    console.log(`o ${numero} fornecido é ${numPrimo(numero)}, ou seja, NÃO É PRIMO.`);
}
 


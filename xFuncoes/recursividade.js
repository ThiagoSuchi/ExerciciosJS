// função para fazer fatorial de um número com recursividade:
function fatorialRecursiv(num){
    
    if(num == 0 || num == 1){// Esta condição é chamada de CASO BASE, onde ira por um limit a quantidade de execução da função
        return 1;
    }

    return num * fatorialRecursiv(num - 1);

}

console.log(`A primeira função irá usar o formato recursivo:  ${fatorialRecursiv(5)}`);





// Função para fazer fatorial do número, com For:
function fatorialComFor(num) {
    
    let resultado = 1;
    
    for(let i = 0; i < num.length; i++){
        resultado *= num[i];
    }

    return resultado;

}


console.log(`A segunda função irá usar o laço de repetição FOR:  ${fatorialComFor([1,2,3,4,5])}`);

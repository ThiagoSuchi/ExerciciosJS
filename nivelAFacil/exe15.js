// 15 -  Dado o array const array = [1, 1, 1, 1, 1], verifique se todos os elementos são iguais e imprima "Todos são iguais" ou "Nem todos são iguais".


const array = [1, 1, 1, 1, 1];
let numIgual = true;
let numDiferente = null

for (let i = 0; i < array.length; i++) {// aqui esta apenas iterando cada elemento do array
    
    for (let j = i + 1; j < array.length; j++) {// loop de comparação, onde esta comparando [i] com [j]
        if(array[i] !== array[j]) {// aqui verifica se o array[i] é diferente do array[j]
            numIgual = false;
            numDiferente = array[j]
            break// interrompe e sai desse loop interno pois ja encontrou um número diferente!
        }
    }

    if(!numIgual) break;// aqui ele analisa se a variavel numIgual é verdadeiramente false, e interrompe o loop externo. O (!numIgual) é uma negação da variavel numIgual = true, logo diz que numIgual é false, assim confirmando o if do loop interno(j) onde numIgual = false.
}

if(numIgual){// Se os numeros forem iguais(numIgual = true), então ele imprimira na tela.
    console.log(`Os números do array [${array}], são todos iguais`);
} else if(numDiferente !== null){// Se haver algum número diferente no array, então imprimira na tela.
    console.log(`O número ${numDiferente} é o unico diferente, do array [${array}]`);
}
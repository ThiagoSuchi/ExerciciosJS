// 03 -conte quantas vezes o número 2 aparece no array.

const array = [1, 2, 3, 2, 4, 2, 5];
let numeroDois = 0;

for(n = 0; n < array.length; n++){
    if(array[n] === 2){
        numeroDois++
    }
} 

console.log(`A quantidade de vezes que o número 2 aparece é: ${numeroDois}`);

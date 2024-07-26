// 08 - Dado o array const array = [1, 2, 3, 4, 5], crie um novo array que seja a versão invertida do array original.

const array = [1, 2, 3, 4, 5];
let arrayInvertido = [];


for(i = array.length - 1; i >= 0; i--){
    arrayInvertido.push(array[i]);
}

console.log(arrayInvertido);





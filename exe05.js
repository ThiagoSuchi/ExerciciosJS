// 05 - Dado o array const numbers = [3, 5, 7, 9], encontre a soma de todos os números no array.

const numbers = [3, 5, 7, 9];
let soma = 0;

for(index in numbers){
    soma += numbers[index]
}

console.log(soma);
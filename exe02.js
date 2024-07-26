// 02 - Dado o array const numbers = [5, 12, 8, 130, 44], encontre o maior número no array.

const numbers = [5, 12, 8, 130, 44];
let numMax = numbers[0];


for(let index = 0; index < numbers.length; index++){
    if(numbers[index] > numMax){
        numMax = numbers[index]
    }
}

console.log(numMax);




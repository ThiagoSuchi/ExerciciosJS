// 10 - Dado o array const array = [5, 8, 12, 3, 7], encontre o número que é menor que 5 e maior que 6. Imprima o resultado.

const array = [5, 8, 12, 3, 7, 2, 1];
let element = '';
let elementTwo = '';

for(let i = 0; i < array.length; i++){
    
    if(array[i] < 5){
        element += `${array[i]} `
    }
    else if(array[i] > 6){
        elementTwo += `${array[i]} `
    }
}



console.log(`The number found, less than five is: ${element}, and the number largest than six is: ${elementTwo}`);
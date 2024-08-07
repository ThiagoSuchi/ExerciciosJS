// 06 - Dado o array const array = [1, 2, 3, 4, -5], verifique se todos os elementos do array são positivos.


const array = [1, 2, 3, 4, -5, -6];
let verificaNumNegativo = false;
let numeroNegativo = '';

array.forEach((numero) => {
    if(numero < 0){
        verificaNumNegativo = true;
        numeroNegativo += `${numero} `;
    }
})


console.log(`O número ${numeroNegativo} foi encontrado!`);
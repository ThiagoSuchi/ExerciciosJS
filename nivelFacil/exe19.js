// 19 - Dado o array const array = [2, 4, 6, 8, 10], encontre o índice do elemento 8 e imprima o resultado.


const array = [2, 4, 6, 8, 10];
let i = 0;

while(i <= array.length){
    i++
    if(array[i] === 8){
        console.log(`O número [${array[i]}] foi encontrado, está na posiçao ${i}`);
    }
}

// 07 - Dado o array const array = [0, 2, 0, 4, 0, 6], conte quantos zeros existem no array.


const array = [0, 2, 0, 4, 0, 6];
let zeros = 0;

for(index of array){
    if(index === 0){
        zeros++
    }
}
console.log(`A quantidade de zeros encontrados no array foram de: ${zeros}`);
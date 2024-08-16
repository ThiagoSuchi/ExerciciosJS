// 14 - Dado o array const array = [9, 5, 2, 7, 4], encontre o número de elementos que são menores que 6 e imprima o resultado.


const array = [9, 5, 2, 7, 4];

const numMenorQueSeis = array.map((num) => {
    if(num < 6){
        return `[${num}] `
    }
    return 
})
console.log(`Aqui estão os números do array que são menores que 6: \n ${numMenorQueSeis.join('')}`);

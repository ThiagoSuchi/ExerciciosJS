// 09 - Dado o array const array = [10, 15, 8, 20, 5], encontre o elemento que tem a maior diferença em relação ao primeiro elemento do array (10).


const array = [10, 15, 8, 20, 5];
let firstNum = array[0];

let elementBiggerDiference = firstNum;
let maiorDiferenca = 0;

for(let indx = 1; indx < array.length; indx++){
    let diferenca = Math.abs(array[indx] - firstNum)

    if(diferenca > maiorDiferenca){
        maiorDiferenca = diferenca;
        elementBiggerDiference = array[indx]
    }
}
console.log(`The element with bigger diference is: ${elementBiggerDiference} with diference of -> ${maiorDiferenca}`);

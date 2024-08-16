// 04 -  Dado o array const array = [10, 20, 30, 40, 50], verifique se o número 25 está presente no array.

const array = [10, 20, 30, 40, 50];
let numNoArray = 50;

encontrado = false;

for(i=0;i<array.length;i++){
    if(numNoArray === array[i]){
        encontrado = true;
    }
}

if(encontrado){
    console.log(`O número ${numNoArray} foi encontrado!!!`);
}else{
    console.log(`O número ${numNoArray} NÃO foi identificado, por favor tente novamente!`);
}

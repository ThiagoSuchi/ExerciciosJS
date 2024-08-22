// 10 - Escreva um código para encontrar o maior elemento em um array de números.

function maiorNumArray(array) {
    let maiorNumero = array[0];
    for(let i of array){
        if(i > maiorNumero){
            maiorNumero = i
        }
    }
    return maiorNumero
}
let funcao = maiorNumArray([11, 22, 33, 54, 77, 56, 800, 100, 2, 3, 1, 400])

console.log(funcao);

//-------------- Ou ultilizando reduce:

function maiorNumArray(array) {

    let maiorNumero = array.reduce((maiorNum, numero) => (numero > maiorNum ? numero : maiorNum), array[0]);
    return maiorNumero

}
let funcaoDois = maiorNumArray([11, 22, 33, 54, 77, 56, 800, 100, 2, 3, 1, 400])

console.log(funcaoDois);
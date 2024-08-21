// 07 - Dado um array de números, escreva um código para ordená-lo em ordem crescente sem usar funções prontas de ordenação.

const numerosAleatorios = [20, 15, 3, 4, 5, 1, 2, 7, 9, 10, 19, 18, 6];

for (let i = 0; i < numerosAleatorios.length; i++) {
    let array = numerosAleatorios;
    for (let j = 0; j < array.length - 1; j++) {
        temp = 0;
        if (array[j] > array[j + 1]) {
           temp = array[j];
           array[j] = array[j + 1]
           array[j + 1] = temp
        }
    }
}

console.log(numerosAleatorios);
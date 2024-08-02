// 17 - Dado o array const array = [1, 3, 2, 6, 4, 5], ordene o array em ordem crescente e imprima o array ordenado.

const array = [5, 9, 2, 6, 4, 1, 3, 7];

        //     2, 4, 1, 3, 5, 6, 7, 9

//             0  1  2  3  4  5  6  7 - indice

//             1  2  3  4  5  6  7  8 - tamanho

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        let temp = 0;
        if (array[j] > array[j + 1]) {
            temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }
    }
}

console.log(array);
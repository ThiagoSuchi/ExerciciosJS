// 13 - Dado o array const array = [10, 15, 20, 25, 30], encontre o número que está na posição intermediária (índice 2) e substitua-o por 100. Imprima o array modificado.

const array = [10, 15, 20, 25, 30];

for(i = 0; i < array.length; i++) {
    array.splice(2, 1, 100)
}

console.log(array);
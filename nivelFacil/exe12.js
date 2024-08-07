// 12 - Dado o array const array = [7, 14, 21, 28, 35], encontre todos os números que são múltiplos de 7 e imprima-os.


const array = [7, 14, 21, 28, 35, 18];

const arrayFiltrado = array.filter(num => num % 7 === 0)

console.log(arrayFiltrado);
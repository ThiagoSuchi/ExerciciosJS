// 11 - Dado o array const array = [1, 4, 6, 8, 10], crie um novo array onde cada elemento é o dobro do elemento correspondente no array original. Imprima o novo array.
//-------------------------------------------------------------------------------------------//

// COM MÉTODO SIMPLES FOR:
for(let i = 0; i < array.length; i++) {
    let arrayIndiceI = array[i] * 2
   numDobrado.push(arrayIndiceI)
}
console.log(numDobrado);

//------------------------------------------------------

// COM MÉTODO .MAP:
const array = [1, 4, 6, 8, 10];
let numDobrado = array.map(num => num * 2 )

console.log(numDobrado);

//------------------------------------------------------

// COM O MÉTODO .REDUCE:
const arrayModificado = array.reduce((acc, num) => {
    acc.push(num * 2)
    return acc
}, [])

console.log(arrayModificado);

//------------------------------------------------------

// COM O MÉTODO .FOREACH:
const arrayDobrado = [];

array.forEach(num => arrayDobrado.push(num * 2));

console.log(arrayDobrado);


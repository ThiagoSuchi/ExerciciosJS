// 06 - Escreva um código que conta o número de vogais em uma string.

const string = "The name of God is I'AM, and the bible talk time all about the son";
let vogalContada = {}


for (let index of string) {
    let vogais = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < vogais.length; i++) {
        if (index == vogais[i] ) {
            vogalContada[index] = (vogalContada[index] || 0) + 1
        }
    }
}
let objString = JSON.stringify(vogalContada)

console.log(`As vogais presentes na frase ('${string}') são:\n - ${objString}`);
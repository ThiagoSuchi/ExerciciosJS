// 03 - Dado um array de números, escreva uma função para calcular a soma de todos os elementos do array.

function somaNumerosInteiros(n) {
    let soma = 0
    for(i=0;i<n.length;i++) {
        soma += n[i]
    }
    return soma
}

let somatoria = somaNumerosInteiros([2,3,4,5,6,7])

console.log(somatoria);
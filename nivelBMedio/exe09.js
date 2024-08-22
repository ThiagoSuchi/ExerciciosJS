// 09 - Escreva uma função removendoDuplicadas que remove duplicatas de um array. E logo em seguida crie uma outra função orderCrescente que execute removendoDuplicadas e organize os numeros recebidos do menor para o maior.

function removendoDuplicadas(num) {// esta function remove todas as duplicatas.
    let numerosDiferentes = []
    
    for (let i = 0; i < num.length; i++) {
        if (!numerosDiferentes.includes(num[i])) {
            numerosDiferentes.push(num[i])
        }
    }
    return numerosDiferentes
}

function orderCrescente(order){// Esta function recebe a function removendoDuplicadas e ordena do menor para o maior
    for (let i = 0; i < order.length; i++) {
        for (let j = 0; j < order.length - 1; j++) {
            temp = 0;
            if (order[j] > order[j + 1]) {
               temp = order[j];
               order[j] = order[j + 1]
               order[j + 1] = temp
            }
        }
    }
    return order
}

let numerosUnicosOrdenados = orderCrescente(removendoDuplicadas([2, 3, 3, 4, 5, 2, 10, 8, 9, 7, 10]))
console.log(numerosUnicosOrdenados);
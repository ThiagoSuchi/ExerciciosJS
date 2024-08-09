function aleatorio(a, b) {
    let intervalo = b - a + 1
    let resultado = Math.floor(Math.random() * intervalo + a)

    return resultado
}

function divisivel(a, b) {
    let restoDivisao = a % b;
    if(restoDivisao == 0) {
        return true; // é divisível
    } else {
        return false; // não é divisível
    }
}

function ePrimo(num) {
    for(let i = 2; i < num; i++) {
        if(divisivel(num, i)) {
            return false; // Não é primo, pois tem algum divisível
        }
    }
    return true; // É primo! se chegou aqui é porque não tem nenhum divisível
}

let numero = aleatorio(1,10000);

if(ePrimo(numero)) {
    console.log(numero, "é primo!")
} else {
    console.log(numero, "não é primo...")
}

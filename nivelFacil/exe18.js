// 18 - Dado o array const array = [10, 20, 30, 40, 50], calcule o produto de todos os elementos e imprima o resultado.


const array = [10, 20, 30, 40, 50];
let produto = 1;
for(i = 0; i < array.length; i++){
    produto *= array[i];
}

let formatado = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
})

let numeroFormatado = formatado.format(produto)

console.log(numeroFormatado);
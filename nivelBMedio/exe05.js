// 05 - Implemente uma função que calcula o fatorial de um número.

function fatorial(num) {
    if(num <= 1){
        return 1;
    } else {
        return num * fatorial(num - 1);
    }
}
let numero = 40
console.log(`O fatorial de !${numero} é: ${fatorial(numero)}`);


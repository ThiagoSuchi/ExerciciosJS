// 16 - Dado o array const array = [5, 12, 8, 21, 7], encontre o número mais próximo de 10 e imprima-o.


const array = [5, 12, 8, 21, 7];
let menorDiferença = Infinity;
let numMaisProxDeDez = [];

for(index of array){
    let menorNumero = [index]
    const diferenca = Math.abs(menorNumero - 10)
    if(diferenca < menorDiferença){
        menorDiferença = diferenca
        numMaisProxDeDez = menorNumero
    }else if(diferenca === menorDiferença){
        numMaisProxDeDez.push(index)
    }
}

console.log(`O número mais próximo de 10 é: ${numMaisProxDeDez.join(' - ')}`);
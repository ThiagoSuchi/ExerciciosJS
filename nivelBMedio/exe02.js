// 02 - Escreva uma função que verifica se uma string é um palíndromo (ou seja, se a string lida de trás para frente é igual à string original).


function verificandoPolidromos(name) {
    let arrayInvertido = [];
    let arrayNormal = [];

    for (let j = 0; j < name.length; j++) {
        arrayNormal.push(name[j])
    }
    for (let i = name.length - 1; i >= 0; i--) {
        arrayInvertido.push(name[i])
    }
    
    let eUmPalindromo = true;
    for (var q = 0; q < arrayNormal.length; q++) {
        if (arrayNormal[q] != arrayInvertido[q]) {
            eUmPalindromo = false;
            break
        }
    }

    if(eUmPalindromo){
        return `As strings: ${name}, são um palíndromo!`
    }else {
        return `As strings: ${name}, NÃO são um palìndromo!`
    }
}

console.log(verificandoPolidromos('racecar'));
console.log(verificandoPolidromos('poiio'));
console.log(verificandoPolidromos('oiios'));
console.log(verificandoPolidromos('poop'));
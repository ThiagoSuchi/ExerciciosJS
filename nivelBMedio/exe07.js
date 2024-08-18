// 07 - Escreva uma função que inverte uma string.


function stringInverse(string) {
   let strings = '' // aqui eu guardo a string informadas pelo i
   for(let i = string.length - 1; i >= 0; i--) {// aqui o laço de repetição itera do ultimo item até o primeiro
        strings += string[i]// depois de iterar letra por letra armazena todas elas na let strings 
    }
    return strings// retorno para o escopo global o valor da minha function que sera strings
}


const text = stringInverse('ola mundo')// falo para minha function que o valor da (string), será ('ola mundo')

console.log(text);// odnum alo

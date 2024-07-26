// 01 -  calcule a quantidade de números positivos, negativos e zeros em um array de inteiros e logo após fça uma conta para tornalos decimais e imprima todo esses valores com precisão de seis casas decimais.

function plusMinus(arr) {
    let numsPositivos = 0;
    let numsNegativos = 0;
    let zeros = 0;

 for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
        numsPositivos++
    }
    else if (arr[i] < 0){
        numsNegativos++
    }
    else {
        zeros++
    }
  }
  const resultado = numsPositivos / arr.length
  const resultado2 = numsNegativos / arr.length
  const resultado3 = zeros / arr.length

console.log(resultado.toFixed(6));
console.log(resultado2.toFixed(6));
console.log(resultado3.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1])


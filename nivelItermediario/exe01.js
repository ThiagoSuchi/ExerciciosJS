// 01 - Implemente um programa que imprime os números de 1 a 100. Mas para múltiplos de 3, imprima "Fizz" ao invés do número, e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos 3 e 5, imprima "FizzBuzz".


let numbers = 1;
while(numbers <= 100){
    if (numbers % 3 === 0 && numbers % 5 === 0){
        console.log('FIZZBUZZ' + ' ' + '-' + ' ' + numbers);
        
    }  else if (numbers % 3 === 0){
        console.log('FIZZ' + ' ' + '-' + ' ' + numbers);

    } else if (numbers % 5 === 0){
        console.log('BUZZ' + ' ' + '-' + ' ' + numbers);
        
    }
    numbers++
}


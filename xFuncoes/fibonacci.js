 function fibonacci(num){
    if(num == 1){
        return 1
    }else if (num == 2){
        return 1
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
 }

 console.log(fibonacci(10));
 

 // 1 | 2 | 3 | 4 | 5 | 6 | 7  | 8  | 9  | 10 - valor informado 
 // 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 - sequênci fibonacci
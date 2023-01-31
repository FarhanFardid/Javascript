function even_odd(number)
{
    if(number % 2 == 0){
        return "true";
    }
    else{
        return "false"; 
    }
}

var input = 70;
let result = even_odd(input);
console.log("The number ", input, " is an even number? -", result);
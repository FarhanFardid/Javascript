// for loop

function factorial(number){
    let fact = 1;
    if(number == 0){
        return fact;
    }
    else if(number < 0){
        return "Negative number is not considered."
    }
    else{
        for(var i=1; i <= number; i++)
        {
            fact = fact * i;
            console.log(fact);
        }
        return fact;

    }
}

let input = 10;
let result = factorial(input);
console.log(" The factorial of ", input, " is : ", result );


// while loop 
console.log("While Loop");
function factorial_while(number){
    let fact = 1;
    if(number == 0){
        return fact;
    }
    else if(number < 0){
        return "Negative number is not considered."
    }
    else{
        var i=1;
        while(i<=number)
        {
            fact = fact * i;
            console.log(fact);
            i++;
        }
        return fact;

    }
}

let input1 = 10;
let result1 = factorial(input1);
console.log(" The factorial of ", input1, " is : ", result1 );
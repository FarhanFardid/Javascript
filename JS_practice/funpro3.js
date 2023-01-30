
// with parameter and return

function odd_even (n){
    if(n%2 == 0){
        return "an Even";
    }
    else{
        return "a odd";
    }
}

var result = odd_even(8);
console.log("The Number is", result ," number");

// // with parameter and without return
function odd_even1 (n){
    if(n%2 == 0){
        console.log("The Number is an Even number");
    }
    else{
        console.log("The Number is a Odd number");
    }

}

odd_even1(7);
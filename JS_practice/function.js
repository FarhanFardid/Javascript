// blank function
function blank(){
    console.log("This is a blank function, nothing to show");
}

blank();

//  Add function
function add (){
    var n=8;
    var m=5;
    var sum = m +n;
    console.log("The sum is: ", sum);
}

add();

// undefined type function

function add1 (){
    var n=9;
    var m=6;
    var sum = m +n;
    return;
}
var result= add1();
console.log("The result from the function after return will be undefined , Result:", result );

// another undefined function
function add3 (){
    var n=9;
    var m=8;
    var sum = m +n;

}
var result= add3();
console.log("The result from the function after return will be undefined , Result:", result );


// functon return value to a variable
function add2 (){
    var n=9;
    var m=8;
    var sum = m +n;
    return sum;
}
var result= add2();
console.log("The result from the function after return is :", result );
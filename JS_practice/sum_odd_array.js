function odd_array(input){
    let odd =[];
    for(var i=0; i<input.length; i++ ){

    number = input[i];
    if(number % 2 == 1){
        odd.push(number);
        console.log(number);
    }
}
return odd;
}


function sum_array(odd_array){
    let sum =0;
    for(var i=0; i<odd_array.length; i++ ){
        sum += odd_array[i];
        console.log(sum);
    }
    return sum;

}


let input=[34, 56, 13, 17, 89, 57, 46, 80, 99];
let odd_numbers = odd_array(input);
console.log("The Odd numbers are: ", odd_numbers);

let result = sum_array(odd_numbers);
console.log("The sum of the odd numbers in the array is : ", result);
function sum_of_array(numbers){
    let sum =0;
    for(var i=0; i<numbers.length; i++){
        sum += numbers[i];
        console.log(numbers[i], sum); 
    }
    return sum;

}

let input =[8, 90, 4, 5, 6, 23, 54, 67, 89, 1];
let result= sum_of_array(input);
 console.log("The sum of the array ", input , " is = ", result);
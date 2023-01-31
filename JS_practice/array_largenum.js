function large_number(numbers){
    var large= -1;
    for(var i=0; i< numbers.length; i++){
        if(numbers[i] > large)
        {
            large = numbers[i];
            console.log(large);
        }
    }
    return large;
}

let input = [3, 45, 57, 67, 80, 1, 100, 100.04, 100.09, 100.11 ];
let result = large_number(input);
console.log("The largest number of the array is: ", result);
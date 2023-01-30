function average(arr , l){
    var sum=0;
    for(var i=0; i<l ;i++){
        sum += arr[i]; 
    }
    console.log("The sum of the array is: ",sum);

    var  avg = sum /l;

    return avg;
}

var num =[2, 5, 6,7,8,10];
var n = num.length;
var result = average(num, n);
result =result.toFixed(3);
console.log("The Average of the array  value is: ", result);
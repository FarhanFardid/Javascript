function average(x, y, z){
    var total= x + y + z;
    var avg = total / 3;
    return avg;
}

var result = average(19, 49, 56);
 result = result.toFixed(2);
console.log("The average of the three numbers is: ", result);

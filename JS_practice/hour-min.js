function hour_to_minute(hour)
{
    let min = hour * 60;
    return min;

}

let input = 9;
let result = hour_to_minute(input);
console.log("The ", input , " Hours in minutes is ", result, " minutes");
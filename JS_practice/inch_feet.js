function inch_to_feet(inch)
{
    var feet = inch / 12;
    return feet;
}

let input = 108;
let result  = inch_to_feet(input).toFixed(2);

console.log("The conversion of " , input ," inches is ", result, "feet" );
function is_leap_year(year){
    if(year % 4 == 0)
    {
        return "yes";

    }
    else{
        return "No";
    }
}

let input = 2023;
let result = is_leap_year(input);
console.log("Is the year ", input, " a Leap year? ", result);
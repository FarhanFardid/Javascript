function find_leap_year(years){
    let leap_year=[];
    for(var i=0; i< years.length; i++){
        
        var year = years[i];
        
        if(year % 4 == 0){
            leap_year.push(year);
            console.log(year);
        }
    }
    return leap_year;
}

let input = [2020, 2023, 2024, 2026, 2027, 2028, 2030];
let result = find_leap_year(input);
console.log("The leap years from the given years are: ", result);
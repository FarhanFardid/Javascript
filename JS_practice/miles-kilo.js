function miles_to_kilo(mile){
    let kilo = mile * 1.6;
    return kilo;
}

let mile = 95.8;
let result = miles_to_kilo(mile);
console.log("The ", mile, " miles in kilometers is  ", result, " km" );

var car ={
    Brand: "BMW",
    Model: "MX-120",
    Color: "Red",
    Year: 2023,
    Gear: "Manual"

}

var key = Object.keys(car);
console.log(key);

var value = Object.values(car);
console.log(value);

console.log("showing object property using for loop");
var n = key.length;
 for(var i=0; i<n; i++)
 {
    var prop= key[i];
    var val= car[prop];
    console.log(prop , val );
 }

//  for in loop 
console.log("showing object property using for in loop");
 for(var prop in car){
    var val = car[prop];
    console.log(prop, val);
 }
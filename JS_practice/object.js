var car ={
    Brand: "BMW",
    Model: "MX-120",
    Color: "Red",
    Year: 2023,
    Gear: "Manual"

}
// show the car object
console.log("The Car Object is:",car);
// access the car object properties

console.log("The Brand of the car is:", car.Brand);
console.log("The Model of the car is:", car['Model']);
var clr = "Color";
console.log("The color of the car is:", car[clr]);

// change the object property
car.Gear="Automatic & Manual";

console.log(car);

// 

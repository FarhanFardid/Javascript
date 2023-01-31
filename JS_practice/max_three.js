function maximum_number(num1, num2, num3){
    if(num1 > num2){
        if(num1 > num3){
            return num1;
        }
        else{
            return num3;
        }
    }
    else if(num2 > num3)
    {
        return num2;
    }
    else
    {
        return num3;
    }

}

var x = 100.1;
var y =100;
var z = 100.05;

let result = maximum_number(x, y,z);

console.log("The maximum of the three numbers is : ", result);

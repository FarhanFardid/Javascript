console.log("Loop will skip when the value is higher than 200:");
var books_Price = [100, 300, 140, 199, 200, 320, 80, 55, 199.9 ];
for(var i=0;i<books_Price.length; i++){
    if(books_Price[i]>=200){
        continue;
    }
    console.log(books_Price[i]);
}
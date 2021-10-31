function sayHelloTo (name, age){
console.log(name, age);
}
sayHelloTo(`ilia`, `kimeridze`);


// 1)
function number (num){
    if(num % 2 ===0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
number(4)

// 2)
function getCurrencySymbolFromCode (USD){
    return `$`;
}
const getCurrency = getCurrencySymbolFromCode (`$`);
console.log (getCurrency) ;
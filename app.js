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

// 3
function firstSentence (MY, NAME, IS, JOHN){
    return `my name is jonh`
}
const secondSentence = firstSentence (`my name is jonh`)
console.log (secondSentence);

// 4
function getArray(luwiArray) {
    const result = luwiArray.filter(number => number % 2 == 0);
    console.log(result);
}

luwiArray = [3, 5, 6, 8, 11, 18, 20];
getArray(luwiArray);

// 5
// --
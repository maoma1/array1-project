
/*Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements 
*/


const myList = ['woman of substance', 'power of your mind', 'how to make your faith work', 'the holyspirit and you'];


function getArrayComponents(a,n) {
    return a.slice(0,n)
}
console.log(myList,3)

let myArray = ['woman of substance', 'power of your mind', 'how to make your faith work', 'the holyspirit and you'];
let news = ['a', 'b', 'c', 'd']

function newArray(a,n) {
    let result = a.slice(0,n);
    return result;
}

console.log(newArray(myArray ,2))
 


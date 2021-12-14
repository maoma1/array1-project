
/*Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.
*/



const myList = ['woman of substance', 'power of your mind', 'how to make your faith work', 'the holyspirit and you'];



let num = myList.length;

  function findArrayElements(myList, num) {
    for (let i = 0; i < num; i++) {
      console.log(myList[i])
    
    }
}
 findArrayElements(myList, 3)

  

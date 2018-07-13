// practice from book 2

//chicken monkey

//Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

//To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

//For example...

// Only show even numbers
//const numbers = [1,2,3,4,5,6,7]

//for (let i = 0; i < numbers.length; i++) {
//    const currentNumber = numbers[i]

// Take the current number, divide by 2, and check if the remainder is 0
//    if (currentNumber % 2 === 0) {
//        console.log(currentNumber) // Only 2, 4, 6 will appear
//    }
//}



for (let i = 1; i < 101; i++) {
    let newNum = i
    if(newNum % 5 === 0 && newNum % 7 === 0){
        console.log("Chicken Monkey")
    } else if ( newNum % 7 === 0) {
        console.log("Monkey")
    } else if ( newNum % 5 === 0) {
        console.log("Chicken")
    } else {
        console.log(newNum)
    }   
}

//Practice: Take a Number - Battle of the Bands
//A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

//Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

//const bandNumber = 1

//const takeNumber = function () {
    /*
        Write your awesome code here. See comments
        below for what should be returned.
    */
//}

//const scum = takeNumber("Galactic Scum")
//console.log(scum)  // This should print "1. Galactic Scum" in the console

//const under = takeNumber("Underdogs")
//console.log(under)  // This should print "2. Underdogs" in the console

let bandNumber = 1
const takeNumber = function (bandName) {
    return `${bandNumber++}. ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum)

const under = takeNumber("Underdogs")
console.log(under)

//Practice: Overly Excited
//Requirements
//For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.
//Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.
// Create an array that contains the words in the sentence
//let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

//
   // The addExcitement function should be an impure function, and accept
   // the array as the sole argument. It should iterate over the array
   // and output the words to the browser console.
//
//function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
 //   let buildMeUp = ""

//    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp

        // Print buildMeUp to the console
//    }

//}

// Invoke the function and pass in the array
//addExcitement(sentence)

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (wordArray) {
    let buildMeUp = '';
    for (let i = 0; i < wordArray.length; i++) {
        buildMeUp += wordArray[i] + " ";
        console.log(buildMeUp)
    }
}
addExcitement(sentence);

//Then add logic to addExcitement that places an exclamation point (!) after every third word. This will require you to do some basic math in JavaScript, and use an if statement.

//Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.

//If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single exclamation point (!) to the output.

function addMoreExcitement (wordArray) {
    let buildMeUpMore = '';
    let properPlace = 0;
    for (let i = 0; i < wordArray.length; i++) {
        buildMeUpMore += wordArray[i] + " ";
        properPlace++;
        if (properPlace % 3 === 0){
            console.log(buildMeUpMore += "! ")
        } else {
            console.log(buildMeUpMore)
        }
        
    }
}
addMoreExcitement(sentence);

//Even More Excited
//Add logic in the addExcitement function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.

function addEvenMoreExcitement (wordArray) {
    let buildMeUpEvenMore = '';
    let properPlace = 0;
    let bang = "! "
    for (let i = 0; i < wordArray.length; i++) {
        buildMeUpEvenMore += wordArray[i] + " ";
        properPlace++;
        if (properPlace % 3 === 0){
            buildMeUpEvenMore += bang;
            bang += "! ";
            console.log(buildMeUpEvenMore)
        } else {
            console.log(buildMeUpEvenMore)
        }
        
    }
}
addEvenMoreExcitement(sentence);
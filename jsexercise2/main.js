// // 0. FizzBuzz

function FizzBuzz(){
    for (let i = 1; i <= 100 ; i++) {
        if(i%3==0 && i%5==0){
            console.log("fizzbuzz");
        }else if(i%5==0){
            console.log("buzz");
        } else if(i%3==0){
            console.log("fizz");
        } else
            console.log(i);
    }
}

FizzBuzz();

// 1. Longest String

let myarray= ["Hey", "what's", "up", "kevin", "Excited" ]

function maxLength(myarray){
 var longest=myarray[0];

 for (let i = 0; i < myarray.length; i++) {
     if (myarray[i].length > longest.length) {
         var longest = myarray.length;
         longest = myarray[i]
     }
    }
     return longest;

}

console.log(maxLength(myarray));

// // 2. Reverse Array

// Method One
let myArray = ["Hello", "how", "are", "you?"];
var newArray =[]
function reverseArray(myArray) {
    for (i = myArray.length-1; i>=0; i--) {
        newArray.push(myArray[i])
    }
    return newArray;
}

console.log(reverseArray(myArray));
// Method Two
let myarray = ["Hello", "how", "are", "you?"];

function reverseArray(myarray) {
  var newArray = myarray.reverse();

console.log(newArray);
}

console.log(reverseArray(myarray));

// // 3. Count Vowels

var string ="because"

function countVowels(string) {
    return string.match(/[aeiou]/gi).length;
}

console.log(countVowels(string));

// 4. Remove Script

var string = "Shakespeare wrote a Script on  Romeo and Juilet";

function removeScript(string){
   if(string.includes("Script")) {
       var newString = string.replace("Script", "");
       return newString;
   } else
   return string;
}

console.log(removeScript(string));

// // 5. Find Leap Year

var year = 2015

function isleapYear(year)
{
    return new Date(year, 1, 29).getDate() === 29;
}

console.log(isleapYear(year));

// // 6. Email Validation

var string = "knbehounek@@hotmail.comasdqw"
function validateEmail(string) {
    var valemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valemail.test(string);
}

console.log(validateEmail(string));

// // 7. Remove Character

function removeChar(string, index) {
    newstring = string.slice(0,index-1) + string.slice(index);
    return newstring;
}

console.log(removeChar("Woohoo", 6));

// // 8. Bubble Sort

var myArray = [3, 7, 2, 4, 5, 6, 1];

function bubbleSort(myArray) {
  var swappedArray;
  do {
    swappedArray = false;
    for (var i = 0; i < myArray.length-1; i++) {
      if (myArray[i] > myArray[i + 1]) {
        var tempArray = myArray[i];
        myArray[i] = myArray[i + 1];
        myArray[i + 1] = tempArray;
        swappedArray = true;
      }
    }
  } while (swappedArray);
}

console.log(bubbleSort(myArray));
console.log(myArray);

// 10. Palindrome

var somestr = "racecar";
function isPalindrome(somestr) {
  if (somestr == somestr.split("").reverse().join("")){
    return true;
  } else
  return false;
}

console.log(isPalindrome(somestr));

// // 11. Shapes

function printShape(shape, height, character) {
  switch (shape) {
    case "Square":
      var logPrint = "";
      for (i = 0; i < height; i++) {
        logPrint += character;
      }
      for (i = 0; i < height; i++) {
        console.log(logPrint);
      }
      break;
    case "Triangle":
      var logPrint;
      for (i = 0; i <= height; i++) {
        logPrint = "";
        for (j = 0; j < i; j++) {
          logPrint += character;
        }
        console.log(logPrint);
      }

      break;
    case "Diamond":
    {
      var i, width, shape = '';
    
      for(i = 0; i < height * 2 - 1; i++) {
        width = i < height ? i: height * 2 - i - 2;
        shape += Array(height - width).join(' ') + Array(width + 1).join('* ') + '*\n';
      }
      console.log(shape)
    }

      break;

    default:
      return;
  }
}

printShape("Diamond", 5, "%");

// //12.   Rotate Left
var array = [1, 2, 3, 4, 5]
var n = 1

function rotate(array, n){
    if(array.length < 2) {
        return array.slice(0); //returns a copy
      }
      // get the number of actual rotations to perform
      var move = n % array.length;
      // check if there's any need to rotate
      if(move === 0) {
        return array.slice(0); //returns a copy
      }
      // slice and concat
      if( move< 0) {
        return array.slice(move).concat(array.slice(0, array.length+n));
      } else {
        return array.slice(move).concat(array.slice(0, n));
      }
};

console.log(rotate(array, n));

// // 13. Balanced Brackets

var string = "[]"

function balanced(string){
  if (string.length <= 1)
    return false

    let openingBrackets = ['[', '{', '(']
    let closingBrackets = [']', '}', ')']

    let matchingOpeningBracket, ch
    let check = []

    for (let i = 0; i < string.length; i++) {
      ch = string[i];

      if (closingBrackets.indexOf(ch) > -1) {
        matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
        if (check.length == 0 || (check.pop() != matchingOpeningBracket)) {
          return false
        }
      } else {
        check.push(ch)
      }
    }

    return (check.length == 0)
  };

console.log(balanced(string));

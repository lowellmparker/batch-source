function fizzbuzz(i){
for(i = 1; i < 100; i++){
    if(i % 15 == 0){
        console.log("fizzbuzz");
    }
    
    else if(i % 5 == 0){
        console.log("buzz");
    }
    else if(i % 3 == 0){
        console.log("fizz");
    }
    else{
        console.log(i);
    }
}
}
  var myArr = ["Elephant", "cat", "bird", "armadillo",  "snake", "spider"];  

function maxLength(array){
 largest = array[0];
 for(i = 0; i < array.length; i++){
    if(array[i].length > largest.length){
        largest = array[i];
    }
 }
 return array.indexOf(largest);
}

function reverseArray(array){
     let newArr = [];
     last = array.length;
     for(i = last-1; i >= 0; i--){
         newArr.push(array[i]);
     }

     return newArr;
}


function vowelCount(string) {
    var vowelTotal = 0;
    string.Tolowercase;
    for (var i = 0; i <= string.length - 1; i++) {
  
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelTotal += 1;
      }
    }
    return vowelTotal;
  }

function removeScript(string){
  string = string.toLowerCase();
  string = string.replace(/script/g, "");
  return string;
  
} 


function isLeapYear(date){
  if(new Date(date, 1, 29).getDate() == 29){
    return true;
  }
 return false;
}

function isValidEmail(string){
  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  str = string
  return str.match(pattern);
}

function removeChar(string, index){
  string = string.slice(0, index) + string.slice(index+1);
  return string;
}

let a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return a;
}


function isPalindrome(string){
  if(string.length === 0 || string.length === 1){
    return true;
  }else if(string[0] !== string[string.length-1]){
    return false;
  }else{
    return isPalindrome(string.slice(1, -1));
  }
}

function printShape(shape, height, character){
  shape = shape.toLowerCase();
  var str = "";
  switch(shape){
    case "square":
      for(i = 0; i <= height; i++){
          console.log(str);
          str = "";
        for(j = 0; j < height; j++){
          str += character;
        }
      }
      break;
    case "triangle":
      for(i = 0; i <= height; i++){
        console.log(str);
        for(j = 0; j < 1; j++)
        str += character;
      }
      break;
      case "diamond":
      let mid = Math.ceil(height/2);
      let space = Math.floor(height/2);
      if(height % 2 == 0){
        console.log("must be odd number");
      }
      else{
       for(i = 0; i < mid + 1; i++){
        
       }
      
        break;
      }
    default:
      return console.log("Invalid Input");
  }
}

function RotateLeft();{
  
}

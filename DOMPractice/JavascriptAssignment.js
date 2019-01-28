window.onload = function() {
  document.getElementById("planet").addEventListener("click", alienText);
  document.getElementsByTagName("details")[0].addEventListener("mouseover", openDetails);
  document.getElementsByTagName("details")[0].addEventListener("mouseout", closeDetails)
  ;
  document.getElementsByTagName("h3")[0].addEventListener("click", calculate);
}

// JavaScript Assignment - Interacting with the DOM
// Achieve the following using only JavaScript (do not change the index.html)

// Make each link direct the user to its respective website (see id)
const link1 = document.getElementsByName("google")[0];
link1.href = "https://www.google.com/";
link1.innerHTML = "Google";
const link2 = document.getElementsByName("twitter")[0];
link2.href = "https://www.twitter.com/";
link2.innerHTML = "Twitter";
const link3 = document.getElementsByName("slack")[0];
link3.href = "https://www.slack.com/";
link3.innerHTML = "Slack";
const link4 = document.getElementsByName("javadocs")[0];
link4.href = "https://www.javadocs.com/";
link4.innerHTML = "Javadocs";

// Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!!)
const noPlanet = document.getElementById("planet");
noPlanet.remove(2);
// Define a function alienText() which shows the hidden element displaying an alien message. When any planet other than Earth is selected, execute this function.

// document.getElementsByTagName(p).hidden= true;
function alienText() {
  var mars = document.getElementById("planet")[1];
  var earth = document.getElementsByTagName("p")[5];
  if (mars.selected) {
    earth.hidden = false;
  } else {
    earth.hidden = true;
  }
}


// When the submit button is pressed, get the values from all of the input into a new row in the table below.  Make sure no input is empty, check that first and last name are at least two letters each. Validate for valid phone number and email structure. This should continue to work for multiple entries and rows.
function addRow(fname, email, phone, birthday, favColor, gender, listContent){
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    let cell5 = document.createElement("td");
    let cell6 = document.createElement("td");
    let cell7 = document.createElement("td");

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    row.appendChild(cell7);

    cell1.innerHTML=fname + lname;
    cell2.innerHTML=email;
    cell3.innerHTML=phone;
    cell4.innerHTML=birthday;
    cell5.innerHTML=favColor;
    cell6.innerHTML=gender;
    cell7.innerHTML=listContent;

    document.getElementsByTagName("table")[0].appendChild(row);
}

document.getElementById("form-sub").addEventListener("click", addNew);


function addNew(){
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let birthday = document.getElementById("bday").value;
    let favColor= document.getElementById("color").value;
    let genderChoice = document.getElementsByName("gender");
    let gender;
     for(gend of genderChoice){
         if(gend.checked == true){
            gender = gend.value;
         }
     }
    let favAct = document.getElementsByClassName("activity");
    let listContent = "";
    for(i = 0; i < favAct.length; i++)
    {
        if(favAct[i].checked){
             listContent += "<ul><li>"+favAct[i].value +"</li></ul>";

        }
    }
    console.log(listContent);
    // document.getElementsByClass("activity");

    addRow(fname + lname, email, phone, birthday, favColor, gender, listContent)
}

// Create a function openDetails() which opens the details element. Invoke this function when the details’ summary is moused over. The details should be hidden when the mouse is removed from the summary.

function openDetails(){
   var show = document.getElementsByTagName("details")[0];
    show.open = true; 
}

function closeDetails(){
    var show = document.getElementsByTagName("details")[0];
    show.open = false; 
}

 

// Create a function that concatenates the inner HTML of all of the span elements and prints the results to the console.
function spanConcat(){
   var meh = document.getElementsByTagName("span");
   var meh2 = "";
   for(i = 0; i<meh.length; i++){
        meh2 += meh[i].innerHTML;
   } console.log(meh2);
}
// Create a function that displays the current time on earth in the span with id “earth_time”. Invoke this function when “Earth time” button is clicked.
document.getElementById("earth_time_check").addEventListener("click", displayTime);
function displayTime(){
    // var timestamp = document.getElementById("earth_time")
    var date = new Date();
    document.getElementById("earth_time").innerHTML = date.toLocaleTimeString();
    // timestamp.innerHTML = date;
}

// Three seconds after a user clicks on the “Intergalactic Directory” heading, the 	background color should change to a random color. Make sure this color is never black so we can still read our black text! (there are other dark colors it could change to where we also couldn’t see the text but it’s enough to just accomodate for a black background)
document.getElementsByTagName("h1")[0].addEventListener("click", timeChange);

function timeChange(){
    setTimeout(changeColor, 3000);
}

function changeColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    if(bgColor != "rgb(0,0,0 )"){
    //    if(r!=0 && g!=0 && b!=0 ){
        document.getElementsByTagName("h1")[0].style.backgroundColor = bgColor;
    } else {
        changeColor()
    }
    
}


// When inputs with id n1 and n2 have valid numerical input, perform the operation specified in the select. Display the result in the element with id result.

function calculate(){
    var input1 = Number(document.getElementById("n1").value);
    console.log(input1);
    var input2 = Number(document.getElementById("n2").value);
    var operation = document.getElementById("operation");
    console.log(input2);
    var result = 0;
    for(i = 0; i < operation.length; i++){
      if(operation[i].innerHTML == "Add"){
        if(operation[i].selected){
          result = input1 + input2;
        }
      } else if(operation[i].innerHTML == "Subtract"){
        if(operation[i].selected){
          result = input1 - input2;
        }
      } else if(operation[i].innerHTML == "Divide"){
        if(operation[i].selected){
          result = input1 / input2;
        }
      } else if(operation[i].innerHTML == "Multiply"){
        if(operation[i].selected){
          result = input1*input2;
        }
      }
    }
    document.getElementById("result").innerHTML = result;

  }

    
// Define function walkTheDom(node, func)
// 	This function should traverse every node in the DOM.
// 	Use recursion. On each node, call func(node).
// function walkTheDom(node, func){
//     var theNodes = document.getElementsByTagName(node);
//     for(i = 0; i < all.length - 1; i++){
//       func(theNodes[i]);
//     }
//   }

function test(node){
  console.log(node);
}

function walkTheDOM(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
      walkTheDOM(node, func);
      node = node.nextSibling;
  }
}


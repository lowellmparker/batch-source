console.log("js success!")



let google = document.getElementsByName("google")[0];
google.href = "https://www.google.com/";

let twitter = document.getElementsByName("twitter")[0];
twitter.href = "https://www.twitter.com/";

let slack = document.getElementsByName("slack")[0];
slack.href = "https://www.slack.com/";

let javadocs = document.getElementsByName("javadocs")[0];
javadocs.href = "https://www.google.com/";



let pluto = document.getElementsByTagName("option")[2];
pluto.remove();

document.getElementById("planet").addEventListener("change", alienText);

function alienText(){
    let selection = document.getElementById("planet").value;
    if(selection == "Mars"){
        let newNode = document.getElementsByTagName("p")[5];
        newNode.removeAttribute("hidden");
    }
    else document.getElementsByTagName("p")[5].setAttribute("hidden", "none");
}

function addNew(){
    let acts = [];
    let form = document.getElementsByClassName("form-group")[0];
    let name = document.getElementById("firstname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let bday = document.getElementById("bday").value;
    let color = document.getElementById("color").value;  

    let errorstr = document.createElement("p");

    for (i = 0; i < form.length; i++) {

        if (form[i].name == "gender"){
            if (form[i].checked == false){
                errorstr.innerHTML += "Gender is needed,";
                
            }
            else gender = form[i].value;
            
        }
 
        if (form[i].className == "activity"){
            if (form[i].checked == true){
                acts.push(form[i].value);
            }
        }
    }
    
    
    document.getElementsByTagName("h4")[3].appendChild(errorstr);

    addRow(name, email, phone, bday, color, gender, acts);
}


function addRow(name, email, phone, birthday, favColor, gender, activity){
    var row = document.createElement("tr");
    var cell0 = document.createElement("td");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");

    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    
    cell0.innerHTML = name;
    cell1.innerHTML = email;
    cell2.innerHTML = phone;
    cell3.innerHTML = birthday;
    cell4.innerHTML = favColor;
    cell5.innerHTML = gender;
    cell6.innerHTML = activity;

    document.getElementsByClassName("table")[0].appendChild(row);
}

document.getElementById("form-sub").addEventListener("click", addNew);

let summary = document.getElementsByTagName("summary")[0];

summary.setAttribute("onmouseover", "openDetails()");
summary.setAttribute("onmouseout", "closeDetails()");

function openDetails(){
    document.getElementsByTagName("details")[0].childNodes[3].hidden = false;
}
function closeDetails(){
    document.getElementsByTagName("details")[0].childNodes[3].hidden = true;
}

function concat(){
    let catstr = "";  
    let concat = document.getElementsByTagName("span");

    for(i = 0; i < concat.length; i++){
        catstr += concat[i].innerHTML;
        
    }
    console.log(catstr);
}

concat();

document.getElementById("earth_time_check").addEventListener("click", showTime);

function showTime(){
    var span = document.getElementById("earth_time");
    if (document.getElementById("earth_time").innerHTML == "") {
        var date = new Date();
      
        date.toString();
        span.innerHTML = date;
    }
}

var changethis = document.getElementsByClassName("container")[0].firstElementChild;
changethis.addEventListener("click", changeBackground);

function randomBackground(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    
    if(x == 0 && y == 0 && z == 0){
        document.body.style.backgroundColor = white;
    }
    document.body.style.background = bgColor;
}
function changeBackground(){
    setTimeout(function(){
        document.body.style.background = randomBackground();
    }, 3000);
}


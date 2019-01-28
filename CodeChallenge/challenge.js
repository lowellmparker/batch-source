var baseUrl = "http://testapp-env.hnpsxrq3bj.us-east-1.elasticbeanstalk.com:8080/message";
document.getElementById("clicker").addEventListener("click", theMessage);
function theMessage(){
    console.log("working?")
    sendAjaxGet(baseUrl, displayMessage);
}

function sendAjaxGet(baseUrl, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", baseUrl);
    xhr.onreadystatechange = function() {
        if(this.readyState===4 && this.status===200){
            callback(this);
        }        
    }
    xhr.send();
}

function displayMessage(xhr){
    let theContentJSON = JSON.parse(xhr.response)
    console.log(theContentJSON);
    console.log(document.getElementById("messageContent").innerHTML = `${theContentJSON}`);
    document.getElementById("messageContent").innerHTML = `${theContentJSON.message}`;
    
}
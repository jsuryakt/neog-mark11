var dob = document.querySelector("#input-date");
var luckyNumber = document.querySelector("#input-lucky-number");
var btnCheck = document.querySelector("#btn-check-lucky");
var output = document.querySelector("#p-lucky-or-not")

btnCheck.addEventListener("click", handleClick);

function handleClick() {
    var year = parseInt(dob.value.slice(0,4));
    var month = parseInt(dob.value.slice(5,7));
    var day = parseInt(dob.value.slice(8,10));
    var lucky = parseInt(luckyNumber.value);

    if(dob.value.trim().length == 0 || luckyNumber.value.trim().length == 0) {
        output.innerText = "how can you be lucky without entering anything?"
    }
    else if((day+month+year)%lucky == 0 && lucky != 1){
        output.innerText = "woah! It's a lucky number";
    }else {
        output.innerText = "oops! Not a lucky number";
    }
}
alert("welcome to today's quote");


const advice = document.querySelector(".advice");  //creating a variable with 
//that allows the storage of the API into the paragraph with class advice

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")  //from the Api(extraction)
    .then(res => res.json())                    //to the json 
    .then(res => { 
        advice.innerHTML = res.slip.advice;     //to the HTML text
    })
    .catch(err => console.error(err));          //to catch errors 
}

document.getElementById("get-advice")
.addEventListener("click", getAdvice);

getAdvice();     //calling the function 


var express = require('express')
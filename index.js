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




//a function that changes the div backgroundcolor every two seconds 
var i = 0;
function alternate() {
  var doc = document.getElementById("box");
  var color = ["black", "blue", "brown", "green"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(alternate, 2000);


//a function that changes the background color of a div

document.getElementById("air").style.backgroundColor = "orange";


//a javascript function that changes the background color of a page
function changeBackground(color) {
   document.body.style.background = color;
}

window.addEventListener("load", function() {
    changeBackground("red");
});
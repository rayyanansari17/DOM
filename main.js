/*

4 pillars of DOM
-- selection of an element 
-- changing HTML
-- changing CSS
-- Event Listner
*/



// 1. selection of an element 

// var a = document.querySelector("h1")
// a.innerHTML ="hello html changed" 
// console.log(a)


//a.style.color="red"
//a.style.backgroundColor = "yellow"


// 4.event listner


//a.addEventListener("click", function(){
  //  a.style.color = "yellow"
  //  a.style.backgroundColor = "red"
//a.innerHTML ="Phir change hogaya"
// })


var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0
btn.addEventListener("click", function(){

    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        btn.innerHTML = "off"
        console.log("on");
        flag = 1
    }else{
        bulb.style.backgroundColor = "transparent"
        btn.innerHTML = "off"
        console.log("off");
        flag = 0
    }
})


// multiple eventcall

/*var h = document.querySelectorAll("h1")

h.forEach(function(e){
    console.log(e);
})

*/


// if document is selected by id then 

var bx = document.querySelector("#box")
bx.innerHTML = "<h1>hello</h1>"
bx.style.backgroundColor = "yellow"
console.log(bx);
// by class name 


 


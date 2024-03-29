
//detecting button press
var numberVar = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberVar; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() //the event Listener allows to wait the click
        { 
            var buttonOfeach = this.innerHTML;
            makeSound(buttonOfeach);
            buttonAnimation(buttonOfeach); //activate the hover on clincking
        }
    );
}

// dectecting keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key); //activate the hover on keyboard pressing
});



function makeSound(key){
    switch (key){
    case "w" || "W":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    break;
    case "a" || "A":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    break; 
    case "s" || "S":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    break;
    case "d" || "D":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    break;
    case "j" || "J":
        var snare= new Audio("sounds/snare.mp3");
        snare.play();
    break;
    case "k" || "K":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    break;
    case "l"||"L":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    break;
    default: console.log(buttonOfeach);
 }

  
}

function buttonAnimation(currentKey){

    var activeButton =  document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

// document.querySelectorAll("button")[0,1,2,3,4,5].addEventListener("click",handleCLick);
function handleCLick(){
    var letter = this.innerHTML;
   makeSound(letter);
   buttonAnimation(letter);
     
}
var x = document.querySelectorAll(".drum");
for (let i = 0;i <x.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",handleCLick);
    
}
document.addEventListener("keypress",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });
    function makeSound(key){
        switch(key){
                case 'W': var tom1 = new Audio('sounds/tom-1.mp3');
                        tom1.play();
                        break;
                        case 'w': var tom1 = new Audio('sounds/tom-1.mp3');
                        tom1.play();
                        break;
                case 'A': var tom2 = new Audio('sounds/tom-2.mp3');
                        tom2.play();
                        break;
                        case 'a': var tom2 = new Audio('sounds/tom-2.mp3');
                        tom2.play();
                        break;
                case 'S': var tom3 = new Audio('sounds/tom-3.mp3');
                        tom3.play();
                        break;
                        case 's': var tom3 = new Audio('sounds/tom-3.mp3');
                        tom3.play();
                        break;
                case 'D': var tom4 = new Audio('sounds/tom-4.mp3');
                        tom4.play();
                        break;
                        case 'd': var tom4 = new Audio('sounds/tom-4.mp3');
                        tom4.play();
                        break;
                case 'J': var snare = new Audio('sounds/snare.mp3');
                        snare.play();
                        break;
                        case 'j': var snare = new Audio('sounds/snare.mp3');
                        snare.play();
                        break;
                case 'K': var crash = new Audio('sounds/crash.mp3');
                        crash.play();
                        break;
                        case 'k': var crash = new Audio('sounds/crash.mp3');
                        crash.play();
                        break;
                case 'L': var kick = new Audio('sounds/kick-bass.mp3');
                        kick.play();
                        break;
                        case 'l': var kick = new Audio('sounds/kick-bass.mp3');
                        kick.play();
                        break;
                    }
    }

    function buttonAnimation(currentKey){
      var activeButton = document.querySelector("."+currentKey);
      activeButton.classList.add("pressed");
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },100);
    }
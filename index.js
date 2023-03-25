for(var i=0;i<document.querySelectorAll(".drum").length;i++){


// ==========listning clickes from mouse==========

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    console.log(this.innerHTML);
    var buttonInnerHTML=this.innerHTML;

    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    })
}

// =======keypress listner==============

document.addEventListener("keypress", function(event){
    
    playSound(event.key);
    buttonAnimation(event.key);
    console.log(event.key);
})



// =======function for playing sounds========


function playSound(key){
    switch (key) {
        case "w":
                var audio=new Audio('sounds/tom-1.mp3');
                    audio.play();
                    break;   
        case "a":
                var audio=new Audio('sounds/tom-2.mp3');
                    audio.play();
                    break;
        case "s":
                var audio=new Audio('sounds/tom-3.mp3');
                    audio.play();
                    break;
        case "d":
                var audio=new Audio('sounds/tom-4.mp3');
                    audio.play();
                    break;
        case "j":
                var audio=new Audio('sounds/snare.mp3');
                    audio.play();
                    break;
        case "k":
                var audio=new Audio('sounds/crash.mp3');
                    audio.play();
                    break;
        case "l":
                var audio=new Audio('sounds/kick-bass.mp3');
                    audio.play();
                    break;
        default:
            break;
    }
}


function buttonAnimation(currentKey){

    var currentKey = document.querySelector("."+currentKey);
    currentKey.classList.add("pressed");
    setTimeout(function(){
        currentKey.classList.remove("pressed");
    },100);
    

}




function playSound(keyCode) {
    console.log("function called.");
    var sound = new Audio("./Sounds/boom.wav");
    switch(keyCode){
        case 'A':
            console.log("boom");
            sound.play();
            break;
        case 'S':
            sound = document.getElementById("boomSound");
            break;
        case 'D':
            sound = document.getElementById("boomSound");
            break;
        case 'F':
            sound = document.getElementById("boomSound");
            break;
        /*
        case keyCode:
            sound = document.getElementById("boomSound");
            break;
        case keyCode:
            sound = document.getElementById("boomSound");
            break;
        case keyCode:
            sound = document.getElementById("boomSound");
            break;
        case keyCode:
            sound = document.getElementById("boomSound");
            break;
        case keyCode:
            sound = document.getElementById("boomSound");
            break;
        */

    }
    console.log("reached");
    console.log("reached1");
}

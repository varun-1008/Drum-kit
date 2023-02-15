for(var i = 0; i < (document.querySelectorAll(".drum").length); i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
    case "w":
        var a1 = new Audio("sounds/tom-1.mp3");
        a1.play();
        break;
    case "a":
        var a1 = new Audio("sounds/tom-2.mp3");
        a1.play();
        break;
    case "s":
        var a1 = new Audio("sounds/tom-3.mp3");
        a1.play();
        break;
    case "d":
        var a1 = new Audio("sounds/tom-4.mp3");
        a1.play();
        break;
    case "j":
        var a1 = new Audio("sounds/snare.mp3");
        a1.play();
        break;
    case "k":
        var a1 = new Audio("sounds/crash.mp3");
        a1.play();
        break;
    default:
    var a1 = new Audio("sounds/kick-bass.mp3");
        a1.play();
        break;
    }
}

function buttonAnimation(key) {
    var a = document.querySelector("." + key);

    a.classList.add("pressed");
    setTimeout(function () {
        a.classList.remove("pressed");
    }, 100);
}
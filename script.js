
const envelopeButton = document.getElementById("envelope-button");
const letterContainer = document.getElementById("letter-container");
const closeLetter = document.getElementById("close-letter");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const letterButtons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");


// OPEN LETTER
envelopeButton.addEventListener("click", function() {

    letterContainer.classList.add("show");
    document.body.classList.add("letter-open");

});


// CLOSE LETTER
closeLetter.addEventListener("click", function() {

    letterContainer.classList.remove("show");
    document.body.classList.remove("letter-open");

});


// YES BUTTON
yesButton.addEventListener("click", function() {

    letterButtons.style.display = "none";

    finalText.hidden = false;

    noButton.style.position = "";

});


// NO BUTTON ESCAPE
function moveNoButton() {

    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noButton.style.position = "fixed";

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    noButton.style.zIndex = "2000";

}


// MOUSE AND TOUCH
noButton.addEventListener("pointerenter", moveNoButton);

noButton.addEventListener("pointerdown", function(event) {

    event.preventDefault();

    moveNoButton();

});

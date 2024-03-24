// Function to show answer
function showAnswer() {
    const answer = document.getElementById("answer");
    answer.innerText = "Of course you are ,my sweetheart 💗";
    answer.style.display = "block";
    // Hide the button after answering
    const button = document.querySelector(".love-button");
    button.style.display = "none";
}

// Function to toggle music
let musicPlaying = true;
const bgMusic = document.getElementById("bgMusic");

function toggleMusic() {
    if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
    } else {
        bgMusic.play();
        musicPlaying = true;
    }
}
// Function to set girl name 
function setGirlName(Malak) {
               const GirlName =
               document.getElementById("girlname") ; 
               GirlName.innerText =Malak }
               // call the setGirlName function with her name 
               setGirlName("Malak")
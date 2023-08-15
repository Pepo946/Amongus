const playButton = document.getElementById("playButton");
const audio = document.getElementById("audio");
const susText = document.querySelector(".sus-text");

playButton.addEventListener("click", () => {
    audio.play();

    // Generate a random color for the "SUS" text
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    susText.style.color = randomColor;
});
// Theme button

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("darkTheme");

});


// Display typed message

const messageInput = document.getElementById("messageInput");

const displayMessage = document.getElementById("displayMessage");

messageInput.addEventListener("input", function() {

    displayMessage.textContent = messageInput.value;

});


// Show browser window size

const windowSize = document.getElementById("windowSize");

function showWindowSize() {

    windowSize.textContent =
        window.innerWidth + " x " + window.innerHeight;

}

showWindowSize();

window.addEventListener("resize", showWindowSize);


// Live clock

const clock = document.getElementById("clock");

function updateClock() {

    const currentTime = new Date();

    clock.textContent = currentTime.toLocaleTimeString();

}

updateClock();

setInterval(updateClock, 1000);


// Circle follows mouse

const mouseCircle = document.getElementById("mouseCircle");

document.addEventListener("mousemove", function(event) {

    mouseCircle.style.left = event.clientX + "px";

    mouseCircle.style.top = event.clientY + "px";

});
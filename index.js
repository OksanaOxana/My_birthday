gsap.from("h1", {opacity:0, duration:2, delay:1})
gsap.from("#myButton", {y:-500, opacity:0, duration:1})
gsap.from(".birthday", {y:500, opacity:0, duration:1})
gsap.from(".block", {opacity:0, stagger: .3, duration: 3, repeat:-1, delay:1.5})

function birthdayCountdown() {
    const birthdayDate = new Date("January 21, 2025 08:00");
    const now = new Date();

    const diff = birthdayDate - now;

    const msInSecond = 1000; //миллисекунд в 1с
    const msInMinute = 1000*60;//миллисекунд в 1мин
    const msInHour = 1000*60*60;//миллисекунд в 1ч
    const msInDay = 1000*60*60*24;//миллисекунд в 1д

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if(diff<=0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timeID);
        happyBirthday();
}
}
let timeID = setInterval(birthdayCountdown, 1000);

function happyBirthday() {
    const heading = document.querySelector("h1");
    heading.textContent = "Happy Birthday me!";
    heading.classList.add("present")
}

const button = document.querySelector("#myButton");
const audio = document.querySelector('#myAudio');
button.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
   // document.querySelector("#myAudio").play()
    }   
}
)

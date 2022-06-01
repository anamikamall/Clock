    // console.log("hi");
const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // console.log("hi");
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60)*360)+90;  // convert seconds in degree  (+90 because first we transformed hands by 90deg to make it vertical)
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60)*360)+90;
minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutes);

const hours = now.getHours();
const hoursDegrees = ((hours / 12)*360)+90;
hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours);

}
setInterval(setDate,1000);
// setInterval(setClock,1000)

// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')
// function setClock(){
//     const currentDate = new Date()
//     const secondsRatio = currentDate.getSeconds() / 60 
//     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 
//     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

//     setRotation(secondHand , secondsRatio)
//     setRotation(minuteHand , minutesRatio)
//     setRotation(hourHand , hoursRatio)
// }

// function setRotation(element , rotationRatio){
//     element.style.setProperty('--rotation', rotationRatio * 360)
// }

// setClock()

function updateClock(hours,minutes,seconds){
    var hourDegrees = hours * 30;
    var minuteDegrees = minutes * 6;
    var secondDegrees = seconds * 6;

$('.hour').css({
 'transform':`rotate(${hourDegrees}deg)`
});

$('.minute').css({
    'transform':`rotate(${minuteDegrees}deg)`
   });

$('.second').css({
    'transform':`rotate(${secondDegrees}deg)`
});

}
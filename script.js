const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const monthsEL = document.getElementById('months')
const yearsEL = document.getElementById('years')

const birthday = '2003-03-31T00:00+03:00';

function countdown(){
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();
    const totalseconds = Math.floor((currentDate - birthdayDate) / 1000); // секунды
    const seconds = Math.floor(totalseconds % 60); // округляем сукунды
    const mins =  Math.floor(totalseconds / 60) % 60; // округляем минуты
    const hours =  Math.floor(totalseconds / 3600) % 24;
    const days =  Math.floor((totalseconds / 3600 / 24) % 365.25)
    const months = Math.floor(totalseconds / 3600 / 30.43058812 / 24) % 12
    const years = Math.floor(totalseconds / 3600 / 30.43058812 / 24 / 12)
    
    
    yearsEL.innerHTML = years
    monthsEL.innerHTML = months
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown,1000);







const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const birthday = '2023-11-24T00:00+03:00';

function countdown(){
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();
    const totalseconds = Math.floor((birthdayDate - currentDate) / 1000);
    const seconds = Math.floor(totalseconds % 60);
    const mins =  Math.floor(totalseconds / 60) % 60;
    const hours =  Math.floor(totalseconds / 3600) % 24;
    const days =  Math.floor(totalseconds / 3600 / 24);


    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown,1000);




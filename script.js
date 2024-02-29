const daynumber = document.getElementById("daynumber");
const hrnumber  = document.getElementById("hrnumber");
const minnumber = document.getElementById("minnumber");
const secnumber = document.getElementById("secnumber");

const currentDate = new Date().getFullYear();

const newDateTime  = new Date(`March 6 ${currentDate} 11:30:00`);


// Update Function
function updateCountDowntime(){
    const currentTime = new Date();
    const diff = newDateTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000) % 60;

    daynumber.innerHTML = d < 10 ? '0' + d : d;
    hrnumber.innerHTML = h < 10 ? '0' + h : h;
    minnumber.innerHTML = m < 10 ? '0' + m : m;
    secnumber.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountDowntime, 1000);
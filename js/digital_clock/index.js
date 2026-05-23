function getTime(){
    let date = new Date();
    date = date.toTimeString().slice(0, 8);
    document.getElementById('clock').textContent = date;
}

setInterval(() => {
    getTime();
}, 1000);


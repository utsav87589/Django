function getTime(){
    let date = new Date();
    date = date.toTimeString().slice(0, 8);
    document.getElementById('time').textContent = date;
}

setInterval(() => {
    getTime();
}, 1000);


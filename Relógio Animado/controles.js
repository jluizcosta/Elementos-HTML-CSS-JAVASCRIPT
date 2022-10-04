setInterval(()=> {
    const time = document.querySelector(".display #time");
    let date = new Date();
    let hourtime = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if(hourtime > 12){
        day_night = "PM";
        hourtime = hourtime - 12;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hourtime < 10){
        hourtime = "0" + hourtime;
    }
    time.textContent = hourtime + ":" + minutes + ":" + seconds + " " + day_night;
 });


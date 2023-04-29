function timeFunc() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(timeFunc, 1000);
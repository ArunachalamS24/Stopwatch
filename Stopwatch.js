let start = 0;
let elapsed = 0;
let running = false;
let timer = 0;
let display = document.getElementsByClassName("timer")[0];


let Start = _=>{
    if(!running){
        start = Date.now()-elapsed;
        timer = setInterval(update, 10);
        running = true;
    }
}

let Stop = _=>{
    if(running){
        clearInterval(timer)
        elapsed = Date.now()-start;
        running = false;
    }
}

let Reset = _=>{
    start = 0;
    elapsed = 0;
    clearInterval(timer)
    running = false;
    display.innerText = "00:00:00:00";
}

let update = _=>{
    let current = Date.now();
    elapsed = current - start;
    let hours = Math.floor(elapsed/(1000*60*60)).toString().padStart(2, 0);
    let min = Math.floor(elapsed/(1000*60)%60).toString().padStart(2, 0);
    let sec = Math.floor(elapsed/(1000)%60).toString().padStart(2, 0);
    let millisec = Math.floor(elapsed%1000/10).toString().padStart(2, 0);
    display.innerText = `${hours}:${min}:${sec}:${millisec} `
}
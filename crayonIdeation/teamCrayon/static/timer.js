const start1 = document.querySelector('#hunibutton');
const start2 = document.querySelector('#yuributton');
const start3 = document.querySelector('#chulsubutton');
const start4 = document.querySelector('#maenggubutton');
const timer = document.getElementById('timer');

start1.addEventListener('click', timeleft);
start1.addEventListener('click', updatetime);
start2.addEventListener('click', timeleft);
start2.addEventListener('click', updatetime);
start3.addEventListener('click', timeleft);
start3.addEventListener('click', updatetime);
start4.addEventListener('click', timeleft);
start4.addEventListener('click', updatetime);

let limittime = 60;
let counter = 0;

const gameover = document.getElementById('game')



function updatetime(){
    var interval = setInterval(timeleft, 1000);
}


function timeleft(){
    counter+=1;
    let nowtime = (limittime-counter);
    timer.innerHTML = '지금 남은 시간은! ' + nowtime +'초';
    console.log(nowtime);
    if(nowtime<1){
        interval = setInterval(timeleft,0);
        timer.innerHTML = 'Gmae Over';
        gameover.style.display = 'none';
    }
}

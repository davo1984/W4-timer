// JavaScript    Countdown Timer

window.onload=function(){
    let now = new Date().getTime();
    let end = new Date();
    let start = new Date();
    end.setSeconds( end.getSeconds() + 15);
    //end.setMinutes( end.getMinutes() + 1);
    let intTime = end - start;
//window.alert('iT='+intTime+'\n h='+' '+' m='+' '+' s='+' ');

	timerFun(now, end, intTime);
    //let refreshIntervalId = setInterval(timerFun(end), 10000);

	let finfine = setInterval(timerFun(now, end, intTime), 1000);
	setInterval(timerFun(now, end, intTime), 1000);
}

function timerFun(sT, eT, iT) {
    //let sT = new Date().getTime();
    //let iT = eT - sT;
    //let hour = iT.getHours();
    //let minute = iT.getMinutes();
    //let second = iT.getSeconds();
    iT = iT - 1;
    iT = Math.floor(iT / 1000);
    let hours = Math.floor(iT / 3600);
    let minutes = Math.floor(iT / 60);
    let seconds = Math.floor(iT % 60);
    let strM, strH, strS, dateString = ' ';

// countdown
//end.setSeconds( end.getSeconds() - 1);
//window.alert('iT='+iT+'\n h='+hours+' m='+minutes+' s='+seconds);
if (iT < 1) {
    window.alert('Timer End iT='+iT);
    clearInterval('TRUE');
    return;
//console.log(start + '< >' + end.getSeconds() + ' si='+intTime);
//console.log(start.getSeconds() + '< >' + end.getSeconds() + ' i='+intTime);
}

//pad hour, minute, second as needed
strH = addPad(hours, ' ');
strM = addPad(minutes, '0');
strS = addPad(seconds, '0');
timerStr = strH + ':' + strM + ':' + strS;
document.getElementById("countdownTimer").innerHTML = timerStr;
};

function addPad(n, p) {
    if (n < 10) {
        strN = p + n;
    } else {
        strN = n;
    }
    return strN;
};

// DAVO

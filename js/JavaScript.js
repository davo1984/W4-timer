// JavaScript
function timerFun(eT, finfine) {
    let cT = new Date();
    let timeDif = eT.getTime() - cT.getTime();

    //throw away milliseconds 
    timeDif = Math.floor(timeDif/1000);

    //set seconds then remove (subtract) them
    let remSc = Math.floor(timeDif % 60);
    timeDif = Math.floor(timeDif/60); 

    //set seconds then remove (subtract) them
    let remMn = Math.floor(timeDif % 60);
    timeDif = Math.floor(timeDif/60); 

    //set hours then remove them
    let remHr = Math.floor(timeDif % 24);
    timeDif = Math.floor(timeDif/24);

    //set days
    let remDay = Math.floor(timeDif/24);

    totSc = remDay * 86400 + remHr * 3600 + remMn * 60 + remSc;
    
    let strM, strH, strS, dateString = ' ';

    //pad hour, minute, second if needed
    strH = addPad(remHr, ' ');
    strM = addPad(remMn, '0');
    strS = addPad(remSc, '0');
    
    dateString = strH + ':' + strM + ':' + strS + ' ';
    
    document.getElementById('timerHere').innerHTML = dateString;


    if (totSc < 1) {
        strH = addPad(0, ' ');
        strM = addPad(0, '0');
        strS = addPad(0, '0');
        dateString = strH + ':' + strM + ':' + strS + ' ';
        document.getElementById('timerHere').innerHTML = dateString;
        clearInterval(finfine);
    };
}

    /////////////////////////////
function addPad(n, p) {
        if (n < 10) {
            strN = p + n;
        } else {
            strN = n;
        }
        return strN;
};

    /////////////////////////////
window.onload=function(){

        let end = new Date();
        end.setSeconds( end.getSeconds() + 130);  // add time to count down
        let done = setInterval(function(){timerFun(end, done)}, 222);
}

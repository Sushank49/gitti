i = 0;
text = "WORK SMART"
text2 = "NOT HARD"
tlen = text.length + text2.length
time_interval = 150 //time interval after each letter appers or disappers in ms
time_interval_new = 2500 // time interval after all letters have appered or have been deleted
function typing(){
        if (i<text.length){
            document.getElementById("smart").innerHTML += text.charAt(i);
            i++
            setTimeout(typing,time_interval)
        }
        else if (i>=text.length & i < tlen){
            document.getElementById("hard").innerHTML += text2.charAt(i-text.length);
            i++
            setTimeout(typing,time_interval)
        }
    }
setTimeout(typing,1500)



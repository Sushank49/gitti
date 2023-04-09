main = document.getElementById("main")
main.addEventListener('click', mainFunction)
let mainFunctionCount = 0;


function mainFunction() {
    if (mainFunctionCount == 0) {
        mainFunctionCount += 1;
        const mech1 = new Audio()
        mech1.src = "img/Mechanical_Sound_1.mp3"
        const mech2 = new Audio()
        mech2.src = "img/Mechanical_Sound_2.mp3"
        const mech3 = new Audio()
        mech3.src = "img/Mechanical_Sound_3.mp3"
        let j = 0;
        {
            let i = 0;
            let text = "WORK ";
            let text2 = "HARD";
            let tlen = text.length + text2.length;
            let time_interval = 300; //time interval after each letter appers or disappers in ms
            function typing() {
                if (i < text.length) {
                    document.getElementById("smart").innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typing, time_interval);
                }
                else if (i >= text.length & i < tlen) {
                    document.getElementById("hard").innerHTML += text2.charAt(i - text.length);
                    i++;
                    setTimeout(typing, time_interval);
                }
                else {
                    blink(delHard, mech2);
                }
            }
        }
    

    blink(typing, mech1)

    function blink(n, x) {
        idInterval = setInterval(() => {
            if (document.getElementById("hard").style.borderRight != 'none') {
                document.getElementById("hard").style.borderRight = 'none';
            }
            else {
                document.getElementById("hard").style.borderRight = '3px solid rgb(172, 172, 172)';
            }
        }, 750);
        setTimeout(() => {
            clearInterval(idInterval);
            if (x != undefined) {
                x.play()
            }
            n();
        }, 3000);


    }

    function delHard() {
        text2 = document.getElementById('hard').innerHTML;
        console.log(text2)
        if ((text2.length > 2)) {
            console.log(j);
            document.getElementById('hard').innerHTML = text2.slice(0, text2.length - 1);
            setTimeout(delHard, 300);
        }
        else {
            blink(rewrite, mech3)
            document.getElementById('hard').style.color = 'lime'
        }

    }
    {
        text = 'SMART';
        let i = 0;
        function rewrite() {
            if (i < text.length) {
                document.getElementById("hard").innerHTML += text.charAt(i);
                setTimeout(rewrite, 300);
                i++;

            }
            else {

                blink(rewrite)
            }


        }


    }
}
}
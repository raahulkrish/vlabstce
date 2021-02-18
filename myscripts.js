function disable() {
    document.getElementById("s1").disabled = true;
    }
function enable() {
    document.getElementById("s1").disabled = false;
    }
function timedText() {
    setTimeout(myTimeout1, 1000) 
    setTimeout(myTimeout2, 1030) 
    setTimeout(myTimeout3, 1070)
    }
function myTimeout1() {
    document.getElementById('myImg').src = "p-n2.png";
    }
function myTimeout2() {
    document.getElementById('myImg').src = "jnformation112.gif";
    }
function myTimeout3() {
    document.getElementById('myImg').src = "depletion_layer111.gif";
    }
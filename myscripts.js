function disable() {
    document.getElementById("s1").disabled = true;
    }
function enable() {
    document.getElementById("s1").disabled = false;
    }
function timedText1() {
    setTimeout(myTimeout00, 1800)
    setTimeout(myTimeout11, 2500) 
    setTimeout(myTimeout22, 3000) 
    }    
function timedText() {
    setTimeout(myTimeout0, 900)
    setTimeout(myTimeout1, 1000) 
    setTimeout(myTimeout2, 1030) 
   setTimeout(myTimeout3, 1070)
    }
function myTimeout00() {
    document.getElementById('myImg').src = "1.png";
    } 
function myTimeout11() {
    document.getElementById('myImg').src = "2.png";
    }
function myTimeout22() {
    document.getElementById('myImg').src = "3.png";
    }


function myTimeout0() {
    document.getElementById('myImg').src = "p-n222.png";
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
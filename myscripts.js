var check;
function disable() {
    document.getElementById("s1").disabled = true;
    }
function enable() {
    if (check==1)
    {
    document.getElementById("s1").disabled = false;
    setTimeout(myTimeout00, 1800)
    setTimeout(myTimeout11, 2500) 
    setTimeout(myTimeout22, 3000)
    }
    else
    {
        alert("Form P-N Junction first");
    }
}

function timedText() {
    setTimeout(myTimeout0, 900)
    setTimeout(myTimeout1, 1000) 
    setTimeout(myTimeout2, 1030) 
   setTimeout(myTimeout3, 1070)
   setTimeout(myTimeout4, 6070)
   
    }
function myTimeout00() {
    document.getElementById('myImg').src = "1.gif";
    } 
function myTimeout11() {
    document.getElementById('myImg').src = "2.gif";
    }
function myTimeout22() {
    document.getElementById('myImg').src = "3.gif";
    }


function myTimeout0() {
    document.getElementById('myImg').src = "p-n222.gif";
    } 
function myTimeout1() {
    document.getElementById('myImg').src = "p-n2.gif";
    }
function myTimeout2() {
    document.getElementById('myImg').src = "jnformation112.gif";
    }
function myTimeout3() {
    document.getElementById('myImg').src = "depletion_layer1112.gif";
    }
function myTimeout4() {
    document.getElementById('myImg').src = "Snapshot_1.gif";
    check=1;
}
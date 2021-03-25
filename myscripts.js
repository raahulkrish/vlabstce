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

function diodeval()
{
    var Vs=Number(document.getElementById("bnn").value);
    var vd=0.53;
    if(Vs>=0.54 && Vs<0.7)
    {
        document.getElementById("diode").innerHTML= 0.53+' '+ 'V';
    }
    else if(Vs>=0.7 && Vs<0.9)
    {
        document.getElementById("diode").innerHTML= 0.54+' '+ 'V';
    }
    else if(Vs>=0.9 && Vs<1.1)
    {
        document.getElementById("diode").innerHTML= 0.58+' '+ 'V';
    }
    else if(Vs>=1.1 && Vs<1.3)
    {
        document.getElementById("diode").innerHTML= 0.6+' '+ 'V';
    }
    else if(Vs>=1.3 && Vs<1.5)
    {
        document.getElementById("diode").innerHTML= 0.63+' '+ 'V';
    }
    else if(Vs>=1.5 && Vs<1.7)
    {
        document.getElementById("diode").innerHTML= 0.65+' '+ 'V';
    }
    else if(Vs>=1.7 && Vs<1.9)
    {
        document.getElementById("diode").innerHTML= 0.68+' '+ 'V';
    }
    else if(Vs>=1.9 && Vs<2.1)
    {
        document.getElementById("diode").innerHTML= 0.7+' '+ 'V';
    }
    else if(Vs>=2.1 && Vs<2.3)
    {
        document.getElementById("diode").innerHTML= 0.71+' '+ 'V';
    }
    else if(Vs>=2.3 && Vs<2.6)
    {
        document.getElementById("diode").innerHTML= 0.72+' '+ 'V';
    }
    else if(Vs>=2.6 && Vs<2.9)
    {
        document.getElementById("diode").innerHTML= 0.73+' '+ 'V';
    }
    else if(Vs>=2.9 && Vs<3.3)
    {
        document.getElementById("diode").innerHTML= 0.74+' '+ 'V';
    }
    else if(Vs>=3.3 && Vs<3.6)
    {
        document.getElementById("diode").innerHTML= 0.75+' '+ 'V';
    }
    else if(Vs>=3.6 && Vs<4.1)
    {
        document.getElementById("diode").innerHTML= 0.76+' '+ 'V';
    }
    else if(Vs>=4.1)
    {
        document.getElementById("diode").innerHTML= 0.77+' '+ 'V';
    }
    else
    {
        document.getElementById("diode").innerHTML= 0+' '+ 'V';
    }
}
function currentval()
{
    var Vs=Number(document.getElementById("bnn").value);
    var vd=0.53;
    if(Vs>=0.54)
    {    
    var V = Vs-vd;
    var r = 1000;
    var Cur = V/r*1000;
    var I = Cur.toFixed(3);
    document.getElementById("current").innerHTML= I +' '+ 'mA';  
    }
    else
    {
        document.getElementById("current").innerHTML= '0 A';

    }
}

function Simulation(){
    
    simulation.style.display="block";
    
    theory.style.display="none";
    procedure.style.display="none";


}
function Procedure(){
 procedure.style.display="block";
 simulation.style.display="none";
 theory.style.display="none";
}
function Theory(){
    
    procedure.style.display="none";
    theory.style.display="block";
    simulation.style.display="none";
}
function fbias(asdf) {
    document.getElementById('bnn').innerHTML=asdf;
    var v = asdf;
    
    if(v>0 && v<=0.53)
    {
        document.getElementById('myImg').src= "06.gif";
    }
    else if(v >= 0.54 && v <= 0.58 )
    {        
        step3.style.display="none";
        step4.style.display="block";
        document.getElementById('myImg').src= "fbiasworkloop1.5.gif";
    }
    else if(v > 0.58 && v <= 0.6 )
    {
        document.getElementById('myImg').src= "fbiasworkloop2.5.gif";
    }
    else if(v > 0.6 && v <= 0.65 )
    {
        document.getElementById('myImg').src= "fbiasworkloop3.5.gif";
    }
    else if(v > 0.65 && v <= 0.7 )
    {
        document.getElementById('myImg').src= "fbiasworkloop4.5.gif";
    }
    else if(v > 0.7 && v <= 0.72 )
    {
        document.getElementById('myImg').src= "fbiasworkloop6.gif";
    }
    else if(v > 0.72 && v <= 0.74 )
    {
        document.getElementById('myImg').src= "fbiasworkloop7.gif";
    }
    else if(v > 0.74 && v <= 0.76 )
    {
        document.getElementById('myImg').src= "fbiasworkloop8.gif";
    }
    else if(v > 76 && v <= 0.77 )
    {
        document.getElementById('myImg').src= "fbiasworkloop9.gif";
    }
    else if(v > 0.77 && v <= 2 )
    {
        document.getElementById('myImg').src= "fbiasworkloop10.gif";
    }
    
}
function steptwo()
{
    step1.style.display="none";
    step2.style.display="block";
    
}
function stepthree()
{
    step2.style.display="none";
    step3.style.display="block";

}
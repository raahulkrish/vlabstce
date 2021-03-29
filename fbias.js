function fbias(asdf) {
    document.getElementById('bnn').innerHTML=asdf;
    var v = asdf;
    if(v==0)
    {
        step3.style.display="none";
        step4.style.display="block";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="none";
        document.getElementById('myImg').src= "0v.gif";
    }
    else if(v>0 && v<=0.53)
    {
        step3.style.display="none";
        step4.style.display="block";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="none";
        document.getElementById('myImg').src= "06.gif";
    }
    else if(v >= 0.54 && v <= 0.58 )
    {      
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="block";
        step6.style.display="none";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop1.gif";
    }
    else if(v > 0.58 && v <= 0.6 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop1.5.gif";
    }
    else if(v > 0.6 && v <= 0.65 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop2.gif";
    }
    else if(v > 0.65 && v <= 0.7 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop2.5.gif";
    }
    else if(v > 0.7 && v <= 0.72 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop3.gif";
    }
    else if(v > 0.72 && v <= 0.74 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop3.5.gif";
    }
    else if(v > 0.74 && v <= 0.76 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop4.gif";
    }
    else if(v > 76 && v <= 0.77 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop4.5.gif";
    }
    else if(v > 0.77 && v <= 2 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop5.gif";
    }
    else if(v > 2 && v <= 2.5 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop6.gif";
    }
    else if(v > 2.5 && v <= 3)
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop7.gif";
    }
    else if(v > 3 && v <= 3.5 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="block";
        document.getElementById('myImg').src= "fbiasworkloop8.gif";
    }
    else if(v > 3.5 && v <= 4 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="block";
        document.getElementById('myImg').src= "fbiasworkloop9.gif";
    }
    else if(v > 4 && v <= 5 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="block";
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
function stepfour()
{
    step3.style.display="none";
    step4.style.display="block";

}
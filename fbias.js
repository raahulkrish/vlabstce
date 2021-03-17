function fbias(asdf) {
    document.getElementById('bnn').innerHTML=asdf;
    var v = asdf;
    if(v>0 && v<0.02)
    {
        document.getElementById('myImg').src= "00.png";
    }
    else if(v>=0.02 && v<=0.04)
    {
        document.getElementById('myImg').src= "01.png";
    }
    else if(v>0.04 && v<=0.06)
    {
        document.getElementById('myImg').src= "02.png";
    }
    else if(v>0.06 && v<=0.08)
    {
        document.getElementById('myImg').src= "03.png";
    }
    else if(v>0.08 && v<=0.1)
    {
        document.getElementById('myImg').src= "04.png";
    }
    else if(v>0.1 && v<=0.12)
    {
        document.getElementById('myImg').src= "05.png";
    }
    else if(v>0.12 && v<=0.53)
    {
        document.getElementById('myImg').src= "06.png";
    }
    else if(v >= 0.54 && v <= 0.58 )
    {
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
    else if(v > 2.5 && v <= 3)
    {
        document.getElementById('myImg').src= "fbiasworkloop6.gif";
    }
    else if(v > 3 && v <= 3.5 )
    {
        document.getElementById('myImg').src= "fbiasworkloop7.gif";
    }
    else if(v > 3.5 && v <= 4 )
    {
        document.getElementById('myImg').src= "fbiasworkloop8.gif";
    }
    else if(v > 4 && v <= 4.5 )
    {
        document.getElementById('myImg').src= "fbiasworkloop9.gif";
    }
    else if(v > 4.5 && v <= 5 )
    {
        document.getElementById('myImg').src= "fbiasworkloop10.gif";
    }
    
}
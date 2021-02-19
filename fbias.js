function fbias(asdf) {
    document.getElementById('bnn').innerHTML=asdf;
    var v = asdf;
    if(v>0 && v<0.05)
    {
        document.getElementById('myImg').src= "00.png";
    }
    else if(v>=0.05 && v<=0.1)
    {
        document.getElementById('myImg').src= "01.png";
    }
    else if(v>0.1 && v<=0.15)
    {
        document.getElementById('myImg').src= "02.png";
    }
    else if(v>0.2 && v<=0.25)
    {
        document.getElementById('myImg').src= "03.png";
    }
    else if(v>0.3 && v<=0.35)
    {
        document.getElementById('myImg').src= "04.png";
    }
    else if(v>0.35 && v<=0.4)
    {
        document.getElementById('myImg').src= "05.png";
    }
    else if(v>0.4 && v<=0.7)
    {
        document.getElementById('myImg').src= "06.png";
    }
    else if(v >= 0.75 && v <= 0.9 )
    {
        document.getElementById('myImg').src= "fbiasworkloop1.gif";
    }
    else if(v > 0.9 && v <= 1.1 )
    {
        document.getElementById('myImg').src= "fbiasworkloop1.5.gif";
    }
    else if(v > 1.1 && v <= 1.3 )
    {
        document.getElementById('myImg').src= "fbiasworkloop2.gif";
    }
    else if(v > 1.3 && v <= 1.5 )
    {
        document.getElementById('myImg').src= "fbiasworkloop2.5.gif";
    }
    else if(v > 1.5 && v <= 1.7 )
    {
        document.getElementById('myImg').src= "fbiasworkloop3.gif";
    }
    else if(v > 1.7 && v <= 1.9 )
    {
        document.getElementById('myImg').src= "fbiasworkloop3.5.gif";
    }
    else if(v > 1.9 && v <= 2.1 )
    {
        document.getElementById('myImg').src= "fbiasworkloop4.gif";
    }
    else if(v > 2.1 && v <= 2.3 )
    {
        document.getElementById('myImg').src= "fbiasworkloop4.5.gif";
    }
    else if(v > 2.3 && v <= 2.5 )
    {
        document.getElementById('myImg').src= "fbiasworkloop5.gif";
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
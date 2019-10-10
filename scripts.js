var d = 1;
var f = 20;
var m = 0;

function addDice(x)
{
   switch(x)
   {
      case 1: d++;break;
      case -1: if(d>1){d--;}break;
      default: alert("...how?");
   }
   document.getElementById("xd").innerHTML = d;
}

function addFace(x)
{
   switch(x)
   {
      case 1: f++;break;
      case -1: if(f>1){f--;}break;
      default: alert("...how?");
   }
   document.getElementById("dx").innerHTML = f;
}

function addMod(x)
{
   switch(x)
   {
      case 1: m++;break;
      case -1: m--;break;
      default: alert("...how?");
   }
   document.getElementById("c").innerHTML = m;
}

function doThing()
{
   var t = 0;
   for(var i = 0; i < d; i++)
   {
      t = t + Math.trunc((Math.random()*f)+1);
   }
   t = t + m;
   document.getElementById("result").innerHTML = t;
}

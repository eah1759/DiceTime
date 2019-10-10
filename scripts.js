var h = 1;//addMore

function addDice(x,a)
{
   var d = parseInt(document.getElementById("xd"+a).innerHTML, 10);
   switch(x)
   {
      case 1: d++;break;
      case -1: if(d>1){d--;}break;
      default: alert("...how?");
   }
   document.getElementById("xd"+a).innerHTML = d;
}

function addFace(x,a)
{
   var f = parseInt(document.getElementById("dx"+a).innerHTML, 10);
   switch(x)
   {
      case 1: f++;break;
      case -1: if(f>1){f--;}break;
      default: alert("...how?");
   }
   document.getElementById("dx"+a).innerHTML = f;
}

function addMod(x,a)
{
   var m = parseInt(document.getElementById("c"+a).innerHTML, 10);
   switch(x)
   {
      case 1: m++;break;
      case -1: m--;break;
      default: alert("...how?");
   }
   document.getElementById("c"+a).innerHTML = m;
}

function doThing()
{
   var t = 0;
   for(var a = 1; a <= h; a++)
   {
      var d = parseInt(document.getElementById("xd"+a).innerHTML, 10);
      var f = parseInt(document.getElementById("dx"+a).innerHTML, 10);
      var m = parseInt(document.getElementById("c"+a).innerHTML, 10);
      for(var i = 0; i < d; i++)
      {
         t = t + Math.trunc((Math.random()*f)+1);
      }
      t = t + m;
   }
   document.getElementById("result").innerHTML = t;
}

function addMore(x)
{
   h++;
   document.getElementById("addStuff").innerHTML = document.getElementById("addStuff").innerHTML + "<br><h3><a id='xd"+h+"'>1</a>d<a id='dx"+h+"'>20</a> +<a id='c"+h+"'>0</a></h3><h4><a onclick='addDice(1,"+h+");'>+1</a>  <a onclick='addDice(-1,"+h+");'>-1</a> | <a onclick='addFace(1,"+h+");'>+1</a>  <a onclick='addFace(-1,"+h+");'>-1</a> | <a onclick='addMod(1,"+h+");'>+1</a>  <a onclick='addMod(-1,"+h+");'>-1</a></h4><br>"
}

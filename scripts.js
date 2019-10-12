var h = [1,1,1,1];//addMore

function addDice(x,a,q)
{
   var d = parseInt(document.getElementById(q+"xd"+a).innerHTML, 10);
   switch(x)
   {
      case 1: d++;break;
      case -1: if(d>1){d--;}break;
      default: alert("...how?");
   }
   document.getElementById(q+"xd"+a).innerHTML = d;
}

function addFace(x,a,q)
{
   var f = parseInt(document.getElementById(q+"dx"+a).innerHTML, 10);
   switch(x)
   {
      case 1: f++;break;
      case -1: if(f>1){f--;}break;
      default: alert("...how?");
   }
   document.getElementById(q+"dx"+a).innerHTML = f;
}

function addMod(x,a,q)
{
   var m = parseInt(document.getElementById(q+"c"+a).innerHTML, 10);
   switch(x)
   {
      case 1: m++;break;
      case -1: m--;break;
      default: alert("...how?");
   }
   document.getElementById(q+"c"+a).innerHTML = m;
}

function doThing(q)
{
   var t = 0;
   for(var a = 1; a <= h[q-1]; a++)
   {
      var temp = 0;
      var d = parseInt(document.getElementById(q+"xd"+a).innerHTML, 10);
      var f = parseInt(document.getElementById(q+"dx"+a).innerHTML, 10);
      var m = parseInt(document.getElementById(q+"c"+a).innerHTML, 10);
      for(var i = 0; i < d; i++)
      {
         temp = temp + Math.trunc((Math.random()*f)+1);
      }
      temp = temp + m;
      document.getElementById(q+"t"+a).innerHTML = "|  "+temp;
      t = t + temp;
   }
   document.getElementById(q+"result").innerHTML = t;
}

function addMore(x,q)
{
   switch(x)
   {
      case 1: h[q-1]++; document.getElementById(q+"addStuff").innerHTML = document.getElementById(q+"addStuff").innerHTML + "<!----><br><h3><a id='"+q+"xd"+h[q-1]+"'>1</a>d<a id='"+q+"dx"+h[q-1]+"'>20</a> +<a id='"+q+"c"+h[q-1]+"'>0</a>  <a id='"+q+"t"+h[q-1]+"'></a></h3><h4><a onclick='addDice(1,"+h[q-1]+","+q+");'>+1</a>  <a onclick='addDice(-1,"+h[q-1]+","+q+");'>-1</a> | <a onclick='addFace(1,"+h[q-1]+","+q+");'>+1</a>  <a onclick='addFace(-1,"+h[q-1]+","+q+");'>-1</a> | <a onclick='addMod(1,"+h[q-1]+","+q+");'>+1</a>  <a onclick='addMod(-1,"+h[q-1]+","+q+");'>-1</a></h4><br>"; break;
      case -1: deletMore(q); break;
      default: alert("...how?!");
   }
   document.getElementById(q+"re").innerHTML = h[q-1];
}

function deletMore(q)
{
   if(h[q-1]>1)
   {
      h[q-1]--;
      var splitTime = document.getElementById(q+"addStuff").innerHTML.split('<!---->');
      var out = splitTime[0];
      for(var i = 1; i < h[q-1]; i++)
      {
         out = out + "<!---->" + splitTime[i];
      }
      if(h[q-1]>1)
      {
         document.getElementById(q+"addStuff").innerHTML = out;
      }
      else
      {
         document.getElementById(q+"addStuff").innerHTML = "";
      }
   }
}

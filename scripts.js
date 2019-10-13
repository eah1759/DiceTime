var h = [1,1,1,1];//addMore
//javascript is dangerously freeing... like pissing in a urinal... but while naked.
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
      case 1: h[q-1]++; document.getElementById(q+"addStuff").innerHTML = document.getElementById(q+"addStuff").innerHTML + "<!----><br><h3><a id='"+q+"xd"+h[q-1]+"'>1</a>d<a id='"+q+"dx"+h[q-1]+"'>20</a> +<a id='"+q+"c"+h[q-1]+"'>0</a>  <a id='"+q+"t"+h[q-1]+"'></a></h3><h4><a id='"+q+"a1a"+h[q-1]+"' onclick='addDice(1,"+h[q-1]+","+q+");'>+1</a>  <a id='"+q+"a2a"+h[q-1]+"' onclick='addDice(-1,"+h[q-1]+","+q+");'>-1</a> | <a id='"+q+"a3a"+h[q-1]+"' onclick='addFace(1,"+h[q-1]+","+q+");'>+1</a>  <a id='"+q+"a4a"+h[q-1]+"' onclick='addFace(-1,"+h[q-1]+","+q+");'>-1</a> | <a id='"+q+"a5a"+h[q-1]+"' onclick='addMod(1,"+h[q-1]+","+q+");'>+1</a>  <a id='"+q+"a6a"+h[q-1]+"' onclick='addMod(-1,"+h[q-1]+","+q+");'>-1</a></h4><br>"; break;
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

function addMOAR(x,q)
{
   //drink up y'all
   if(x==-1)
   {
      var splitTime = document.getElementById("extremeWack").innerHTML.split("<!--hhh-->");
      if(splitTime.length==1) { return null; }//can't delet last one.
      if(q==1)
      {
         var out = "";
      }
      else
      {
         var out = splitTime[0];
      }
      for(var i = 1; i < h.length; i++)
      {
         if(q!=i+1)
         {
            if(q==1&&i==1)
            {
               out = out + splitTime[i];
            }
            else
            {
               out = out + "<!--hhh-->" + splitTime[i];
            }
         }
      }
      document.getElementById("extremeWack").innerHTML = out;

      var temp = [0];
      for(var i = 0; i < h.length; i++)
      {
         if(i>=q)
         {
            temp[i-1] = h[i];
         }
         else if (i<q-1)
         {
            temp[i] = h[i];
         }
      }
      h = temp;
      shuffleThing(q);
   }
   else
   {
      h[h.length] = 1;
      document.getElementById("extremeWack").innerHTML = document.getElementById("extremeWack").innerHTML + "<!--hhh--><div class='dice' id='"+h.length+"'><h2>Roll Time: <a id='"+h.length+"result'></a></h2><h3><a id='"+h.length+"xd1'>1</a>d<a id='"+h.length+"dx1'>20</a> +<a id='"+h.length+"c1'>0</a>  <a id='"+h.length+"t1'></a></h3><h4><a id='"+h.length+"a1a1' onclick='addDice(1,1,"+h.length+");'>+1</a>  <a id='"+h.length+"a2a1' onclick='addDice(-1,1,"+h.length+");'>-1</a> | <a id='"+h.length+"a3a1' onclick='addFace(1,1,"+h.length+");'>+1</a>  <a id='"+h.length+"a4a1' onclick='addFace(-1,1,"+h.length+");'>-1</a> | <a id='"+h.length+"a5a1' onclick='addMod(1,1,"+h.length+");'>+1</a>  <a id='"+h.length+"a6a1' onclick='addMod(-1,1,"+h.length+");'>-1</a></h4><div id='"+h.length+"addStuff'></div><h6 id='"+h.length+"z1' onclick='addMore(1,"+h.length+");'>Add More Dice</h6><h6 id='"+h.length+"z2' onclick='addMore(-1,"+h.length+");'>Add Less Dice</h6><h5 id='"+h.length+"z3' onclick='doThing("+h.length+");'>Generate</h5><p>Test: <a id='"+h.length+"re'>1</a></p><p class='delet' id='"+h.length+"z4' onclick='addMOAR(-1,"+h.length+")'>Remove Dice Set</p></div>";
   }
}

function shuffleThing(q)
{
   for(var i = q; i <= h.length; i++)
   {
   /*
      <div class='dice' id='1'>
         <a id="1result"></a>
         <a id="1xd1">1</a>
         <a id="1dx1">20</a>
         <a id="1c1">0</a>
         <a id="1t1"></a>
         <a id="1a1ax" onclick=addDice(1,1,1);>+1</a>
         <a id="1a2ax" onclick=addDice(-1,1,1);>-1</a>
         <a id="1a3ax" onclick=addFace(1,1,1);>+1</a>
         <a id="1a4ax" onclick=addFace(-1,1,1);>-1</a>
         <a id="1a5ax" onclick=addMod(1,1,1);>+1</a>
         <a id="1a6ax" onclick=addMod(-1,1,1);>-1</a>
         <a id="1addStuff"></a>
         <h6 id="1z1" onclick=addMore(1,1);>Add More Dice</h6>
         <h6 id="1z2" onclick=addMore(-1,1);>Add Less Dice</h6>
         <h5 id="1z3" onclick=doThing(1);>Generate</h5>
         <p>Test: <a id="1re">1</a></p>
         <p class='delet' id="1z4" onclick=addMOAR(-1,1)>Remove Dice Set</p>
      </div>
   */
   //drink up bois.
      document.getElementById((i+1)+"").id=""+i;
      document.getElementById((i+1)+"result").id=i+"result";
      //alert(h[i-1] + " " + h[i] + " ");
      for(var j = 1; j <= h[i-1]; j++)
      {
         document.getElementById((i+1)+"xd"+j).id=i+"xd"+j;
         document.getElementById((i+1)+"dx"+j).id=i+"dx"+j;
         document.getElementById((i+1)+"c"+j).id=i+"c"+j;
         document.getElementById((i+1)+"t"+j).id=i+"t"+j;
         document.getElementById((i+1)+"a1a"+j).setAttribute("onclick", "addDice(1,"+j+","+i+")");
         document.getElementById((i+1)+"a1a"+j).id=i+"a1a"+j;
         document.getElementById((i+1)+"a2a"+j).setAttribute("onclick", "addDice(-1,"+j+","+i+")");
         document.getElementById((i+1)+"a2a"+j).id=i+"a2a"+j;
         document.getElementById((i+1)+"a3a"+j).setAttribute("onclick", "addFace(1,"+j+","+i+")");
         document.getElementById((i+1)+"a3a"+j).id=i+"a3a"+j;
         document.getElementById((i+1)+"a4a"+j).setAttribute("onclick", "addFace(-1,"+j+","+i+")");
         document.getElementById((i+1)+"a4a"+j).id=i+"a4a"+j;
         document.getElementById((i+1)+"a5a"+j).setAttribute("onclick", "addMod(1,"+j+","+i+")");
         document.getElementById((i+1)+"a5a"+j).id=i+"a5a"+j;
         document.getElementById((i+1)+"a6a"+j).setAttribute("onclick", "addMod(-1,"+j+","+i+")");
         document.getElementById((i+1)+"a6a"+j).id=i+"a6a"+j;
      }
      document.getElementById((i+1)+"addStuff").id=i+"addStuff";
      document.getElementById((i+1)+"z1").setAttribute("onclick", "addMore(1,"+i+")");
      document.getElementById((i+1)+"z1").id=i+"z1";
      document.getElementById((i+1)+"z2").setAttribute("onclick", "addMore(-1,"+i+")");
      document.getElementById((i+1)+"z2").id=i+"z2";
      document.getElementById((i+1)+"z3").setAttribute("onclick", "doThing("+i+")");
      document.getElementById((i+1)+"z3").id=i+"z3";
      document.getElementById((i+1)+"re").id=i+"re";
      document.getElementById((i+1)+"z4").setAttribute("onclick", "addMOAR(-1,"+i+")");
      document.getElementById((i+1)+"z4").id=i+"z4";
   }
}

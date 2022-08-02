function Loaddata()
{
var x=localStorage.getItem("nhietdomin");
var y=parseFloat(x);
var address=document.getElementById("o1").innerHTML = y;
x=localStorage.getItem("nhietdomax");
y=parseFloat(x);
address=document.getElementById("o2").innerHTML = y;

x=localStorage.getItem("doammin");
y=parseFloat(x);
address=document.getElementById("o3").innerHTML = y;
x=localStorage.getItem("doammax");
y=parseFloat(x);
address=document.getElementById("o4").innerHTML = y;

x=localStorage.getItem("dophmin");
y=parseFloat(x);
address=document.getElementById("o5").innerHTML = y;
x=localStorage.getItem("dophmax");
y=parseFloat(x);
address=document.getElementById("o6").innerHTML = y;

x=localStorage.getItem("doddmin");
y=parseFloat(x);
address=document.getElementById("o7").innerHTML = y;
x=localStorage.getItem("doddmax");
y=parseFloat(x);
address=document.getElementById("o8").innerHTML = y;

x=localStorage.getItem("doducmin");
y=parseFloat(x);
address=document.getElementById("o9").innerHTML = y;
x=localStorage.getItem("doducmax");
y=parseFloat(x);
address=document.getElementById("o10").innerHTML = y;


x=localStorage.getItem("oxymin");
y=parseFloat(x);
address=document.getElementById("o11").innerHTML = y;
x=localStorage.getItem("oxymax");
y=parseFloat(x);
address=document.getElementById("o12").innerHTML = y;

}

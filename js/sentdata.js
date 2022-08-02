function Sentdata()
{
  var Datagmail=document.getElementById("khunggmail").value;
  var DataMin=document.getElementById("tmin").value;
  var DataMax=document.getElementById("tmax").value;
  var thso=document.getElementById("THONGSO").value;

if(Datagmail==""){
document.getElementById("ENROLLMAIL").innerHTML="Bạn chưa nhập mail. VUI LÒNG NHẬP MAIL" ;
}

else{
document.getElementById("ENROLLMAIL").innerHTML="";
}

if (DataMin==""){
document.getElementById("ENROLL").innerHTML="Bạn chưa nhập giá trị. VUI LÒNG NHẬP LẠI" ;
document.getElementById("ENROLL").style.color="red";
}

else if (DataMax==""){
document.getElementById("ENROLL").innerHTML="Bạn chưa nhập giá trị. VUI LÒNG NHẬP LẠI" ;
document.getElementById("ENROLL").style.color="red";
}

else if(Number(DataMin) > Number(DataMax)){
document.getElementById("ENROLL").innerHTML="Giá trị đã nhập MIN > MAX. VUI LÒNG NHẬP LẠI" ;
document.getElementById("ENROLL").style.color="red";
}

else{
document.getElementById("ENROLL").innerHTML="Giá trị hợp lệ" ;
document.getElementById("ENROLL").style.color="green";

if (thso=="Nhiệt độ")
{
localStorage.setItem("nhietdomin",DataMin);
localStorage.setItem("nhietdomax",DataMax);
}

if (thso=="Độ ẩm")
{
localStorage.setItem("doammin",DataMin);
localStorage.setItem("doammax",DataMax);
}

if (thso=="Độ PH")
{
localStorage.setItem("dophmin",DataMin);
localStorage.setItem("dophmax",DataMax);
}

if (thso=="Độ dẫn điện")
{
localStorage.setItem("doddmin",DataMin);
localStorage.setItem("doddmax",DataMax);
}

if (thso=="Độ đục")
{
localStorage.setItem("doducmin",DataMin);
localStorage.setItem("doducmax",DataMax);
}

if (thso=="Nồng độ oxi")
{
localStorage.setItem("oxymin",DataMin);
localStorage.setItem("oxymax",DataMax);
}

}
}

function buttonA(id,n){
	
    var x=document.getElementById(id);
    var y=document.getElementById(`buttonB${n}`);
    console.log(`buttonB${n}`)
    y.style.display="none";
    x.style.display="none";
    var f=document.getElementById(`buttons${n}`);
    var txt=document.createTextNode("Approved");

    f.append(txt); //txt.style.font-weight="bold";
}
function buttonB(id,n){
    var x=document.getElementById(id);
    var y=document.getElementById(`buttonA${n}`);
    y.style.display="none";
    x.style.display="none";
    var f=document.getElementById(`buttons${n}`);
    var txt=document.createTextNode("Disapproved");

    f.append(txt); //txt.style.font-weight="bold";
}

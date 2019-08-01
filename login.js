function login()
{
	
	var hide=document.getElementById("side");
	console.log(hide);
	hide.style.display="none";
	var show=document.getElementById("side2");
	console.log(show);
	show.style.display ="block";
	var opa=0;
	var int=setInterval(function(){
		opa=opa+0.02;
       show.style.opacity=opa;
       if(opa==1)
       	clearInterval(int);
	},10);

}
function register()
{
	var hide=document.getElementById("side");
	console.log(hide);
	hide.style.display="none";
	var show=document.getElementById("side1");
	console.log(show);
	show.style.display ="block";
    	var opa=0;
	var int=setInterval(function(){
		opa=opa+0.02;
       show.style.opacity=opa;
       if(opa==1)
       	clearInterval(int);
	},10);

}

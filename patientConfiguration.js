//Configure video play specific to patient on page 2


function myFunction() {

	
	if (document.getElementById("selection_1").checked == true)
	{
		alert("in if for video 1");
		let v = 1;
	}	
	if (document.getElementById("selection_3").checked == true)
	{
		alert("in if for video 3");
		let v = 3;
	}
return v;	
}

//let v=1;
//need another function to get v and in my script declare v and pass in into the function with parameters!
function newFunc(v) {
	//let v=1;
	if(v==1)
	{
		alert("v is 1");
	}
	else if (v==3)
	{
		alert("v is 3")
	}
	
}
	
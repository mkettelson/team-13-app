//Configure video play specific to patient on page 2

//ATTEMPT 1
// function selectVideo() {
	// let v = 1;
	// if (document.getElementById("selection_1").checked == true)
	// {
		// alert("in if for video 1");
		// let v = 1;
	// }	
	// if (document.getElementById("selection_3").checked == true)
	// {
		// alert("in if for video 3");
		// let v = 3;
	// }
	// getSelectedVideo(v);
// }
// function getSelectedVideo(v){
	// videoSelected = v;
	// alert("in getSelectedVideo"videoSelected);	
// }
// function playSelectedVideo() {
	// let v=1;
	// if(v==1)
	// {
		// alert("v is 1");
	// }
	// else if (v==3)
	// {
		// alert("v is 3")
	// }
//}


//ATTEMPT 2	

// if(document.URL.indexOf("page2.html") >= 0){ 
	// v = selectVideo();
	// alert(v);
	// alert("in if for page 2");
// }

// if(document.URL.indexOf("page2a.html") >= 0){ 
	// if(v==1)
	// {
		// alert("v is 1");
	// }
	// else if (v==3)
	// {
		// alert("v is 3")
	// }
// }


//ATTEMPT 3: one HTML page with hidden components

function selectVideo() {
	if (document.getElementById("selection_1").checked == true)
	{
		//alert("in if for video 1");
		var v = 1;
	}	
	if (document.getElementById("selection_3").checked == true)
	{
		let v = 3;
	}
	//getVideo(v);

	return v;
	
	alert("v is " + v);

}

function getVideo(){
	videoSelection  = selectVideo();
}

function test() {
	if (selectVideo() == 1)
	{
		alert("working!");
	}
}
	
	
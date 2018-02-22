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
var v = 0;
function selectVideo() {
	if (document.getElementById("selection_2").checked == true)
	{
		//alert("in if for video 2");
        v = 2;
        getVideo();
	}
	if (document.getElementById("selection_4").checked == true)
	{
		v = 4;
        getVideo();
	}
    return v;
}

// function getVideo(){
    // alert("SELECTED VALUE : " + v);
    // return v;
// }

// function playVid(var v){
    // $("#playVid").click(function(){
        // if(v==2){
		// $("#myVideo2").show();
		// }
		// if(v==4){
		// $("#myVideo4").show();
		// }
    // });
// }

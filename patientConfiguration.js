var v = 0;
function selectVideo() {
	if (document.getElementById("selection_1").checked == true)
	{
		//alert("in if for video 1");
        v = 1;
        getVideo();
	}
	if (document.getElementById("selection_2").checked == true)
	{
		v = 2;
        getVideo();
	}
	if (document.getElementById("selection_3").checked == true)
	{
		v = 3;
        getVideo();
	}
	if (document.getElementById("selection_4").checked == true)
	{
		v = 4;
        getVideo();
	}
    return v;
}

function getVideo(){
    alert("(get video) SELECTED VALUE : " + v);
    return v;
}
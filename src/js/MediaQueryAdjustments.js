function changeTextSize(x) {
    if (x.matches) { // If media query matches
    	var element = document.getElementById("EducationText");
    	if(element.classList.contains("col-xs-4")){
    		element.classList.remove("col-xs-4");
    	}
    	if(!element.classList.contains("col-xs-6")){
    		element.classList.add("col-xs-6");
    	}
    	
    } 
    if (y.matches) { // If media query matches
    	var element = document.getElementById("EducationText");
    	if(element.classList.contains("col-xs-6")){
    		element.classList.remove("col-xs-6");
    	}
    	if(!element.classList.contains("col-xs-4")){
    		element.classList.add("col-xs-4");
    	}
    	
    } else {
        
    }
}

var x = window.matchMedia("(max-width: 725px)")
var y = window.matchMedia("(min-width: 726px)")

changeTextSize(x) // Call listener function at run time
//changeTextSize(y) // Call listener function at run time

x.addListener(changeTextSize) // Attach listener function on state changes
y.addListener(changeTextSize) // Attach listener function on state changes

/*
function downloadResume(x) {
	var txt;
	var r = confirm("You have chosen to download Phillip's Resume. Please press OK to proceed.");
	if (r == true) {
	    txt = "You pressed OK!";
	} else {
	    txt = "You pressed Cancel!";
	}
}
*/






//alert(1);
//var navigation=document.getElementsByClassName("ul.navigation li");
//for(var i=0;i<navigation.length;i++){
//	navigation[i].className=".changecolor";
//}
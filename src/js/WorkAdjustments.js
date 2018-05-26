
function changeTextSize(x) {
    if (x.matches) { // If media query matches
    	var element = document.getElementById("imageBox");
    	if(element.classList.contains("col-xs-6")){
    		element.classList.remove("col-xs-6");
    	}
    	if(!element.classList.contains("col-xs-12")){
    		element.classList.add("col-xs-12");
    	}

    	
    } 
    if (y.matches) { // If media query matches
    	var element = document.getElementById("imageBox");
    	if(element.classList.contains("col-xs-12")){
    		element.classList.remove("col-xs-12");
    	}
    	if(!element.classList.contains("col-xs-6")){
    		element.classList.add("col-xs-6");
    	}

    	
    }
    else {
        
    }
}

var x = window.matchMedia("(max-width: 450px)")
var y = window.matchMedia("(min-width: 451px)")

changeTextSize(x) // Call listener function at run time


x.addListener(changeTextSize) // Attach listener function on state changes
y.addListener(changeTextSize) // Attach listener function on state changes


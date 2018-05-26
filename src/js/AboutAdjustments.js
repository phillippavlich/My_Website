
function changeTextSize(x) {
    if (x.matches & yy.matches) { // If media query matches
    	var element = document.getElementsByClassName("clearLeft");
    	if(element[0].classList.contains("col-xs-5")){
    		element[0].classList.remove("col-xs-5");
    	}
    	if(!element[0].classList.contains("col-xs-3")){
    		element[0].classList.add("col-xs-3");
    	}

    	
    } 
    if (y.matches | xx.matches) { // If media query matches
    	var element = document.getElementsByClassName("clearLeft");
    	if(element[0].classList.contains("col-xs-3")){
    		element[0].classList.remove("col-xs-3");
    	}
    	if(!element[0].classList.contains("col-xs-5")){
    		element[0].classList.add("col-xs-5");
    	}

    	
    }
    else {
        
    }
}

var x = window.matchMedia("(max-width: 1070px)")
var y = window.matchMedia("(min-width: 1070px)")

var xx = window.matchMedia("(max-width: 920px)")
var yy = window.matchMedia("(min-width: 920px)")

changeTextSize(x) // Call listener function at run time


x.addListener(changeTextSize) // Attach listener function on state changes
y.addListener(changeTextSize) // Attach listener function on state changes

xx.addListener(changeTextSize) // Attach listener function on state changes
yy.addListener(changeTextSize) // Attach listener function on state changes

function changeTextSizeLower(a) {
   
    if (a.matches) { // If media query matches
        
        var element = document.getElementById("secondPara");
        var element1 = document.getElementsByClassName("NextLine");
        if(element.classList.contains("col-xs-6")){
            element.classList.remove("col-xs-6");
            
        }
        if(!element.classList.contains("col-xs-12")){
            element.classList.add("col-xs-12");
     
        }
        if(element1[0].classList.contains("col-xs-3")){
            element1[0].classList.remove("col-xs-3");
            
        }
        if(!element1[0].classList.contains("col-xs-6")){
            element1[0].classList.add("col-xs-6");
     
        }

        
    } 
    if (b.matches) { // If media query matches
        var element = document.getElementById("secondPara");
        var element1 = document.getElementsByClassName("NextLine");
        if(element.classList.contains("col-xs-12")){
            element.classList.remove("col-xs-12");
        }
        if(!element.classList.contains("col-xs-6")){
            element.classList.add("col-xs-6");
        }
        if(element1[0].classList.contains("col-xs-6")){
            element1[0].classList.remove("col-xs-6");
            
        }
        if(!element1[0].classList.contains("col-xs-3")){
            element1[0].classList.add("col-xs-3");
     
        }

        
    }
    else {
        
    }
}

var a = window.matchMedia("(max-width: 660px)")
var b = window.matchMedia("(min-width: 660px)")



changeTextSizeLower(a) // Call listener function at run time


a.addListener(changeTextSizeLower) // Attach listener function on state changes
b.addListener(changeTextSizeLower) // Attach listener function on state changes

function changeTextSizeLowest(m) {
   
    if (m.matches) { // If media query matches
        
        var element = document.getElementById("pitBox");
        var element2 = document.getElementById("wakeBox");
        var element1 = document.getElementsByClassName("firstPara");
        var element3 = document.getElementById("lastBox");
     
        element.classList.remove("col-xs-4");
        element2.classList.remove("col-xs-3");    
        
 
        element.classList.add("col-xs-6");
        element2.classList.add("col-xs-6");
     
        
        if(element1[0].classList.contains("col-xs-6")){
            element1[0].classList.remove("col-xs-6");
            
        }
        if(!element1[0].classList.contains("col-xs-12")){
            element1[0].classList.add("col-xs-12");
     
        }
        if(element3.classList.contains("col-xs-5")){
            element3.classList.remove("col-xs-5");
            
        }
        if(!element3.classList.contains("col-xs-12")){
            element3.classList.add("col-xs-12");
     
        }

        
    } 
    if (n.matches) { // If media query matches
        var element = document.getElementById("pitBox");
        var element2 = document.getElementById("wakeBox");
        var element1 = document.getElementsByClassName("firstPara");
        var element3 = document.getElementById("lastBox");
        
        element.classList.remove("col-xs-6");
        element2.classList.remove("col-xs-6");    
        
 
        element.classList.add("col-xs-4");
        element2.classList.add("col-xs-3");

        if(element1[0].classList.contains("col-xs-12")){
            element1[0].classList.remove("col-xs-12");
            
        }
        if(!element1[0].classList.contains("col-xs-6")){
            element1[0].classList.add("col-xs-6");
     
        }
        if(element3.classList.contains("col-xs-12")){
            element3.classList.remove("col-xs-12");
            
        }
        if(!element3.classList.contains("col-xs-5")){
            element3.classList.add("col-xs-5");
     
        }

        
    }
    else {
        
    }
}

var m = window.matchMedia("(max-width: 560px)")
var n = window.matchMedia("(min-width: 560px)")



changeTextSizeLowest(m) // Call listener function at run time


m.addListener(changeTextSizeLowest) // Attach listener function on state changes
n.addListener(changeTextSizeLowest) // Attach listener function on state changes






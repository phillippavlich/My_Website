var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function changeTextSize(x) {
    if (x.matches) { // If media query matches
    	var element = document.getElementById("fourthBox");
    	var element2 = document.getElementById("fifthBox");
        var element3 = document.getElementById("sixthBox");

    	if(element2.classList.contains("clear")){
    		element2.classList.remove("clear");
    	}
    	if(!element.classList.contains("clear")){
    		element.classList.add("clear");
    	}
        if(!element3.classList.contains("clear")){
            element3.classList.add("clear");
        }
    	
    } 
    if (y.matches) { // If media query matches
    	var element = document.getElementById("fourthBox");
    	var element2 = document.getElementById("fifthBox");
        var element3 = document.getElementById("sixthBox");
    	if(element.classList.contains("clear")){
    		element.classList.remove("clear");
    	}
    	if(!element2.classList.contains("clear")){
    		element2.classList.add("clear");
    	}
        if(element3.classList.contains("clear")){
            element3.classList.remove("clear");
        }
    	
    }
    if (xx.matches) { // If media query matches
    	var element = document.getElementsByClassName("box");
    	
    	if(element[0].classList.contains("col-xs-6")){
    		for(var i=0; i<element.length;i++){
    			element[i].classList.remove("col-xs-6");
    		}
    		
    	}
    	if(!element[0].classList.contains("col-xs-12")){
    		for(var i=0; i<element.length;i++){
    			element[i].classList.add("col-xs-12");
    		}
    	}
    	
    }
    if (yy.matches) { // If media query matches
    	var element = document.getElementsByClassName("box");
    	if(element[0].classList.contains("col-xs-12")){
    		for(var i=0; i<element.length;i++){
    			element[i].classList.remove("col-xs-12");
    		}
    	}
    	if(!element[0].classList.contains("col-xs-6")){
    		for(var i=0; i<element.length;i++){
    			element[i].classList.add("col-xs-6");
    		}
    	}

    	
    } else {
        
    }
}

var x = window.matchMedia("(max-width: 1050px)")
var y = window.matchMedia("(min-width: 1051px)")
var xx = window.matchMedia("(max-width: 550px)")
var yy = window.matchMedia("(min-width: 551px)")

changeTextSize(x) // Call listener function at run time
changeTextSize(xx) // Call listener function at run time

x.addListener(changeTextSize) // Attach listener function on state changes
y.addListener(changeTextSize) // Attach listener function on state changes
xx.addListener(changeTextSize) // Attach listener function on state changes
yy.addListener(changeTextSize) // Attach listener function on state changes

var coll = document.getElementById("selector");

coll.addEventListener("click", function() {
	this.classList.toggle("active");
	var content = document.getElementById("contentOptions");
	if (content.style.maxHeight){
	  content.style.maxHeight = null;
	} else {
	  content.style.maxHeight = content.scrollHeight + "px";
	} 
});

function removeDropdown(x) {
    if (x.matches) { // If media query matches
    	var element = document.getElementById("selector");
    	var content = document.getElementById("contentOptions");
    	if(element.classList.contains("active")){
    		element.classList.remove("active");
			if (content.style.maxHeight){
			  content.style.maxHeight = null;
			} else {
			  content.style.maxHeight = content.scrollHeight + "px";
			} 
    	}
    	
    } 
   else {
        
    }
}


var x = window.matchMedia("(min-width: 735px)")

x.addListener(removeDropdown) // Attach listener function on state changes


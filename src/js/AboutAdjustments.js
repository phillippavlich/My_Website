function changeTextSizeLower(a) {
   
    if (a.matches) { // If media query matches
        
        var element = document.getElementById("dogsBox");
        
        if(element.classList.contains("clearboth")){
            element.classList.remove("clearboth");
            element.classList.add("floatright");
            
            
        }
        
      
        
    } 
    if (b.matches) { // If media query matches
        var element = document.getElementById("dogsBox");
      
       
        if(!element.classList.contains("clearboth")){
            element.classList.add("clearboth");
            element.classList.remove("floatright");
            
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





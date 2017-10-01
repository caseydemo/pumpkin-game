var zone=document.getElementsByClassName('face');
var x = document.getElementById("myAudio"); 
var y = document.getElementById("myAudio1");


document.onreadystatechange = function() {

  // WHEN DOCUMENT IS LOADED AND INTERACTIVE - START YO STUFF
  if (document.readyState === "interactive") {
    
    alert('audio is:' + x);
    // ADD EVENT LISTENERS TO ALL BUTTONS
    for (i = 0; i < zone.length; i++) {
      zone[i].addEventListener("click", ButtonStuff);
      }
    }
  };

  function ButtonStuff(){
    
  if (this.classList.contains('eye')) {

    x.play(); 
   
      }

    if (this.classList.contains('mouth')) {
    y.play();   
      }

  }
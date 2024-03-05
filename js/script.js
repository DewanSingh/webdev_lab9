function init(){
  //add your javascript between these two lines of code
  var alertbutton = document.getElementById('entrybutton');
  
  function testText(){
    var alertbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = alertbox.value;
    alert("Dewan Singh: " + alertbox.value);
  }
  
  
  alertbutton.addEventListener('click', testText);
}

window.addEventListener('load', init);

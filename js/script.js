function init(){
//add your javascrip between these two lines of code
  function myAlertFunction(){
    var input = document.getElementById('entryinput').value;
	var output = document.getElementById('textoutput');
    output.innerHTML = input;
	alert("Saba Slote: "+ input);
  }
  var alertButton = document.getElementById('entrybutton');
  alertButton.addEventListener('click', myAlertFunction);
}
window.addEventListener('load', init);
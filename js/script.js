function init(){
//add your javascrip between these two lines of code
  function myAlertFunction(){
    var inputText = document.getElementById('entryinput').value;
	var output = document.getElementById('textoutput');
    output.innerHTML = inputText;
	alert("Saba Slote: "+ inputText);
  }
  var alertDiv = document.getElementById('entrybutton');
  alertDiv.addEventListener('click', myAlertFunction);
}
window.addEventListener('load', init);
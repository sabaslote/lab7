function init(){
//add your javascrip between these two lines of code
  function myAlertFunction(){
    alert('Saba Slote:' + input);
  }
  var input = document.getElementById('entryinput').value;
  var output = document.getElementById('textoutput');
  output.innerHTML = input;
  var alertButton = document.getElementById('entrybutton');
  alertButton.addEventListener('click', myAlertFunction);
}

window.addEventListener('load', init);
function removeSpace() {
  // var inputData = $("#ipText").val();
  var inputData = document.getElementById('ipText').value;
  var output = inputData.replace(/\s/gi, "");
  // $("#opText").text(output);
  document.getElementById('opText').innerHTML =output;
}

function clearFields(){
  document.getElementById('ipText').value = "";
  document.getElementById('opText').innerHTML = "";
}

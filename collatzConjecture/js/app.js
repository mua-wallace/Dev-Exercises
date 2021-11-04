 var collatz = document.getElementById('ipText').value;
 let collatzConjecture = (collatz) => {
  // loop till the given collatz is not 1
  while(collatz > 1) {

    //print the collatz
    console.log(collatz);
  
    //if the collatzber is even
    if(collatz % 2 == 0){

      collatz = parseInt(collatz / 2); 

    }else{
      //if the collatzber is odd
      collatz = (collatz * 3) + 1;
    }
  }

// print the last collatzber
console.log(collatz);
}

function clearFields(){
  document.getElementById('ipX1').value = "";
  document.getElementById('opText').innerHTML = "";
}

const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    let regexChar = /\d+/gi;
    let regexSpace = /\s/gi;
    let regexSpecialChar = /[@$#!^&%*]+/gi;
    if(str !== ""){
        if(str.length >=5 && str.length <=10){
            document.getElementById('opText').innerHTML = regexSpace.test(str) ? "Password should not contain space" : (regexChar.test(str) ? (regexSpecialChar.test(str) ? "Valid Password" : "Password should contain at least one special character") : "Password should contain at least one number") ;
        }
        else{
            document.getElementById('opText').innerHTML = "Password length should be between 5 and 10";
        }
    }
    else{
        document.getElementById('opText').innerHTML = "Please enter password";
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}

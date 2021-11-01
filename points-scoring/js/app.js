const scrabble = () => {
    var str = $("#ipText").val();
    let ar = str.split(" ");
    let points = [], sum = 0, newAr = [];

    let onepointer = ["a", "e", "i", "o", "u", "n", "r", "t", "l", "s", "A", "E", "I", "O", "U", "N", "R", "T", "L", "S"];
    let twopointer = ["d", "g", "D", "G"];
    let threepointer = ["b", "c", "m", "p", "B", "C", "M", "P"];
    let fourpointer = ["f", "h", "v", "w", "y", "F", "H", "V", "W", "Y"];
    let fivepointer = ["k", "K"];
    let eightpointer = ["j", "x", "J", "X"];
    let tenpointer = ["q", "z", "Q", "Z"];

    for(let i=0; i<ar.length; i++){        
        for(let j =0; j< ar[i].length; j++){            
            newAr = ar[i].split(""); 
            sum = 0;
            for(let k =0; k<newAr.length; k++){
                if(onepointer.indexOf(newAr[k]) !== -1){
                    sum = sum + 1;
                }
                else if(twopointer.indexOf(newAr[k]) !== -1){
                    sum = sum + 2;
                } 
                else if(threepointer.indexOf(newAr[k]) !== -1){
                    sum = sum + 3;
                }
                else if(fourpointer.indexOf(newAr[k]) !== -1){
                    sum = sum + 4;
                }
                else if(fivepointer.indexOf(newAr[k]) !== -1){
                    sum = sum + 5;
                }
                else if(eightpointer.indexOf(newAr[k]) !== -1){
                    sum = sum + 8;
                }
                else if(tenpointer.indexOf(newAr[k]) !== -1){
                    sum = sum + 10;
                }
                else{
                    sum = 0;
                }
            }            
        } 
        points.push(sum);               
    }

    let sortArray = points.slice().sort(function(a, b){
        return b-a;
    });

    let index = points.indexOf(sortArray[0]);
    $("#opText").text(ar[index]);
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
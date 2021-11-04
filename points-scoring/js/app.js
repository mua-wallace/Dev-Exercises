
var map = {
    a : 1, e : 1, i: 1, o: 1, u: 1 , n: 1, r: 1 , t: 1 , l: 1 , s: 1,
    q: 10, z: 10,
    j: 8, x: 8,
    k: 5,
    f: 4, h: 4 , v:4, w: 4, y: 4,
    b: 3, c: 3 , m: 3 , p: 3,
    d: 2, g: 2
}

// function to calculate the points of a string 
const pointCounter = (str) => {
    let arr = str.toLowerCase().split("");
    var totalPoints = 0;
    arr.forEach(ar => {
        totalPoints += map[ar];   
    });
    return  totalPoints;
}

const scrabble = () => {
    var str = $("#ipText").val().split(" ");
    var answer = '';
    let currentPoint = 0;
    str.forEach(word => {
        if (pointCounter(word) > currentPoint) {
            currentPoint = pointCounter(word);
            answer = word;
        }
    })
    document.getElementById('opText').innerHTML = answer;
};
function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
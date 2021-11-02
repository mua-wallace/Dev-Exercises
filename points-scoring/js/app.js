let allArr = [
    onepointer = {
        points: 1,
        arr: ["a", "e", "i", "o", "u", "n", "r", "t", "l", "s"]
    },
    twopointer = {
        points: 2,
        arr: ["d", "g"]
    },
    threepointer = {
        points: 3,
        arr: ["b", "c", "m", "p"]
    },
    fourpointer = {
        points: 4,
        arr: ["f", "h", "v", "w", "y"]
    },
    fivepointer = {
        points: 5,
        arr: ["k"]
    },
    eightpointer = {
        points: 8,
        arr: ["j", "x"]
    },
    tenpointer = {
        points: 10,
        arr: ["q", "z"]
    }
];

// function to calculate the points of a string 
const pointCounter = (str) => {
    let ar = str.toLowerCase().split("");
    var totalPoints = 0;
    allArr.forEach(arr => {
        ar.forEach(letter => {
           if(arr.arr.includes(letter)) {
               totalPoints += arr.points;
           } 
        })
    });
    return totalPoints;
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
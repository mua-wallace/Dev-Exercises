function find_distance() {
var x1=parseInt(document.getElementById("x1").value);
var y1=parseInt(document.getElementById("y1").value);
var x2=parseInt(document.getElementById("x2").value);
var y2=parseInt(document.getElementById("y2").value);
var distance=Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
alert("Distance: "+distance);
}
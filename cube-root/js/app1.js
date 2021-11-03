

/* Javascript program to find cubic root of a number using Binary Search */

var  n = document.getElementById('ipNumber').value;
// Returns the absolute value of n-mid*mid*mid
// let diff = (n, mid) => { 
// 	if (n > (mid*mid*mid))
// 		return (n-mid*mid*mid);
// 	else
// 		return (mid*mid*mid- n);
// }
		// Set start and end for binary search
		let start = 0, end = n;
		let mid = (start + end) / 2;
		// Set precision
		var e = 0.0001;
		// let  abs = diff(end, mid);
		// console.log(abs);
 let abs = Math.abs(n-(mid*mid*mid));


	/* Returns cube root of a no n */
     function cbRt(n) {

		while (abs > e)
		{
			mid = (start + end)/ 2;
	
			/* If mid*mid*mid is greater than n set end = mid */
			if ((mid*mid*mid) > end) {
				end = mid;
			}

			/* If mid*mid*mid is less than n set start = mid */
			else {
				start = mid;
			}
		}

		/* If error is less than e then mid is our answer so return mid */
		return document.getElementById('opText').innerHTML = abs;
	}
	

	
    function clearFields(){
        document.getElementById('ipNumber').value = "";
        document.getElementById('opText').innerHTML = "";
      
      }	


	
		
		


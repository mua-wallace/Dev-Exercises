
/* Javascript program to find cubic root of a number using Binary Search */
var  n = document.getElementById('ipText').value;

	// Returns the absolute value of n-mid*mid*mid
	function diff(n, mid)
	{
		if (n > (mid*mid*mid))
			return (n-(mid*mid*mid));
		else
			return ((mid*mid*mid) - n);
	}
	
	// Returns cube root of a no n
	function cbRt(n) {

		
		// Set start and end for binary search
		let start = 0, end = n;
		let mid = (start + end)/2;

		// Set precision
		var e = 0.0000001;
	
		while (start <= end)
		{
			let error = diff(n, mid);
	
			/* If error is less than e then mid is our answer so return mid */
			if (error <= e) {
				document.getElementById('opText').innerHTML = mid;
				console.log(mid);
			}
			break;
	
			/* If mid*mid*mid is greater than n set end = mid  */
			if (mid*mid*mid > n) {
				end = mid;
			}	
			// If mid*mid*mid is less than n set start = mid 
			else {
				start = mid;
			}
				}
	}

	/* function to clear input field */
    function clearFields(){
        document.getElementById('ipText').value = "";
        document.getElementById('opText').innerHTML = "";
      
      }

// Driver Code
	
		// let n = 3;
		// document.write("Cube root of "+n+" is "+cubicRoot(n));
		


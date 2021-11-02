

/* Javascript program to find cubic root of a number
 using Binary Search */

	
  
	/* Returns cube root of a no n */
	function cubeRoot(n)
	{
		var  n = document.getElementById('ipText').value;
		// Set start and end for binary search
		let start = 0, end = n;
	
		// Set precision
		let e = 0.0000001;

        function diff(n, mid)  { 
            if (n > (mid*mid*mid))
                return (n-(mid*mid*mid));
            else
                return ((mid*mid*mid) - n);
        }
	
		while (start <= mid)
		{
			let mid = (start + end)/2;
			let error = diff(n, mid);
	
			/* If error is less than e then mid is our answer so return mid */
			if (error <= e) {
		         return document.getElementById('opText')= mid;

			}
	
			/* If mid*mid*mid is greater than n set
			end = mid */
			if ((mid*mid*mid) > n) {
				end = mid;
			}
				
	
			/* If mid*mid*mid is less than n set
			start = mid */
			else {
				start = mid;
			}
		}
		// return document.getElementById('opText').innerHTML = mid;
	}
    /* Returns the absolute value of n-mid*mid*mid */
	// function diff(n, mid)  { 
	// 	if (n > (mid*mid*mid))
	// 		return (n-(mid*mid*mid));
	// 	else
	// 		return ((mid*mid*mid) - n);
	// }


    function clearFields(){
        document.getElementById('ipText').value = "";
        document.getElementById('opText').innerHTML = "";
      
      }	


	
		
		


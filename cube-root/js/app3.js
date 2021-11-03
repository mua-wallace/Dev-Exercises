function crRt(n) {

    var n = document.getElementById('ipNumber').value;
		let start = 0, end = n;
		let e = 0.0001;
		let ans;
		/* for computing integral part of square root of number */
		while (start <= end)
		{
			var mid = (start + end) / 2;
			let error = diff(n, mid);
			if (error <= e)
			{
				ans = mid;
				break;
			}

			/* incrementing start if integral
			 part lies on right side of the mid */
			if (mid * mid * mid > n ) {
				end = mid;
			}

			// decrementing end if integral part
			// lies on the left side of the mid
			else {
				start = mid;
			}
			return document.getElementById('opText').innerHTML = ans;
		}

		// Returns the absolute value of n-mid*mid*mid
	function diff(n, mid)
	{
		if (n > (mid*mid*mid))
			return (n-(mid*mid*mid));
		else
			return ((mid*mid*mid) - n);
	}
  
  }	
  function clearFields() {
	document.getElementById('ipNum').value = "";
	document.getElementById('opText').innerHTML = "";
  
  }		

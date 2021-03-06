function cbRt(number)
	{
    
    var number = document.getElementById('ipNumber').value;
    var nth_root = document.getElementById('ipNth_root').value;

		let start = 0, end = number;
		let mid;

		// variable to store the answer
		let ans = 0.0;

		/* for computing integral part of square root of number */
		while (start < end) {
			mid = (start + end) / 2;
			if (mid**nth_root == number) {
				ans = mid;
				break;
			}

			/* incrementing start if integral part lies on right side of the mid */
			if (mid **nth_root < number) {
				start = mid + 1;
				ans = mid;
			}

			/* decrementing end if integral partlies on the left side of the mid */
			else {
				end = mid - 1;
			}
		}

		/* For computing the fractional part of square root upto given precision */
		let increment = 0.0001;
    let precision = 4;
		for (let i = 0; i < precision; i++) {
			while (ans * ans * ans <= number) {
				ans += increment;
			}

		/* loop terminates when ans * ans > number */
			ans -= increment;
			increment = increment / 10;
		}
     document.getElementById('opText').innerHTML = parseFloat(ans).toFixed(4);
	}
  
function clearFields(){
  document.getElementById('ipNunber').value = "";
  document.getElementById('opText').innerHTML = "";

}			

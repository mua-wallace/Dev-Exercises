function collatzConjecture(n) {

  if (n <= 0) {
    console.log('Only positive numbers are allowed');
  }

  let steps = 0;
  while (n > 1) {
    console.log(n + steps);


    n = n % 2 == 0 ? n / 2 : n * 3 + 1;
    steps++;
  }
  return n ;
}

// calling the collatzConjecture function on submit
let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let n = document.querySelector('#form input').value;
  collatzConjecture(n)
});

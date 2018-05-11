
function factorialize(num) {
  let total = 1;
 for(var i = 1; i <= num; i++) {
   total *= i
  }

  document.getElementById('output').innerHTML = `<p>Answer is ${total}</p>`;
 
}

factorialize(5);
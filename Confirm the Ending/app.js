
function confirmEnding(str, target) {
  str = str.substr(-target.length);
  const output = document.getElementById('output');
  
  if (str === target) {
    output.innerHTML = `The answer is True`;
  } else {
    output.innerHTML = `The answer is False`;
  }
}

confirmEnding("He has to give me a new name", "name");
// confirmEnding("Bastian", "n") should return true.
// confirmEnding("Connor", "n") should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
// confirmEnding("He has to give me a new name", "name") should return true.
// confirmEnding("Open sesame", "same") should return true.
// confirmEnding("Open sesame", "pen") should return false.
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
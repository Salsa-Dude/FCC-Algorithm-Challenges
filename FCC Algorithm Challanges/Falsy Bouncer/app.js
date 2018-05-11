
function bouncer(arr) {
  arr = arr.filter(falseValues);
  document.getElementById('output').innerHTML = `This is the answer [${arr}]`;
}

function falseValues(arg) {
  return Boolean(arg) === true;
}

bouncer([7, "ate", "", false, 9]);
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"]
// bouncer([false, null, 0, NaN, undefined, ""]) should return []
// bouncer([1, null, NaN, 2, undefined]) should return [1, 2]
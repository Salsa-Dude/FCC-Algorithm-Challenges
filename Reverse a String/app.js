
function reverseString(str) {
  str = str.split('');
  str = str.reverse();
  str = str.join('');
  document.querySelector('.output').innerHTML = `<h3>${str}</h3>`;
}

reverseString("hello");
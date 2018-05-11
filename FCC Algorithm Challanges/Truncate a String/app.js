
let output = document.getElementById('output');


function truncateString(str, num) {
  if(str.length > num && num <= 3) {
    output.innerHTML = str.slice(0, num) + '...';
  } else if(str.length > num) {
    output.innerHTML = str.slice(0, num - 3) + '...';
  } else {
    output.innerHTML = str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
// truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper..."
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket"
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket"
// truncateString("A-", 1) should return "A..."
// truncateString("Absolutely Longer", 2) should return "Ab..."
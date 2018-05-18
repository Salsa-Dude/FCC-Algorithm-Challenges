
function spinalCase(str) {
  // Find any lowercase letter next to a UpperCase
  // Replace it with a space in between
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  
  // Replace any whitespace or _ with a '-'
  return str.replace(/\s|_/g, '-');
  
}

console.log(spinalCase('thisIsSpinalTap'));
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".
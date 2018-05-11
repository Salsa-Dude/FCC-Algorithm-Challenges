
function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');
  var titleCase = str.map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  });

  titleCase = titleCase.join(' ');
  
  document.getElementById('output').innerHTML = `<p>Answer is (${titleCase})</p>`;
}

titleCase("I'm a little tea pot");
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
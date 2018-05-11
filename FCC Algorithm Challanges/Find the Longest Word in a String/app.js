
// Using the For loop Method

function findLongestWord(str) {
  str = str.split(' ');
  let longestWord = 0;

  for(var i = 0; i < str.length; i++) {
    if(str[i].length > longestWord) {
      longestWord = str[i].length;
    }
  }

  document.getElementById('output').innerHTML = `The Answer is ${longestWord}`;
}

findLongestWord("What is the average airspeed velocity of an unladen swallow");

// Using the Sort Method

// function findLongestWord(str) {
//  str = str.split(' ');
//  const sortArray = str.sort(function(a,b) {
//   return a.length - b.length;
//  });

//  const longestWord = sortArray[sortArray.length - 1].length;
//  document.getElementById('output').innerHTML = `The Answer is ${longestWord}`;
// }

// findLongestWord("What is the average airspeed velocity of an unladen swallow");
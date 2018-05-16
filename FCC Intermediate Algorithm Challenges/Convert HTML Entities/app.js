
function convertHTML(str) {
  // Store the key and values
  var html = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;'
  };
  
  // Split str into array and use the map function to map each letter
  return str.split('').map(function(letter) {
    return html[letter] || letter;
  }).join('');
  
}

convertHTML("Dolce & Gabbana");
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Shindler's List") should return Shindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
// convertHTML("abc") should return abc.
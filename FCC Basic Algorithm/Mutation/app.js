function mutation(arr) {
  var arr1 = arr[0].toLowerCase();
  var arr2 = arr[1].toLowerCase();
 
 
   return arr2.split('').every(function(letter){
     if (arr1.indexOf(letter) === -1) {
       return false;
     } else {
       return true;
     }
   });
}

console.log(mutation(["hello", "hey"]));
// mutation(["hello", "Hello"]) should return true;
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.

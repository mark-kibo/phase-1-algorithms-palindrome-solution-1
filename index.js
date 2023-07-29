function isPalindrome(word) {
  // Write your algorithm here
  let smallstr, reversedWords;
  let regex=/[\W_]/g

  smallstr=word.toLowerCase().replace(regex, "")
  reversedWords=smallstr.split("").reverse().join("")

  if(reversedWords === smallstr) return true

  return false
}

/* 
  Add your pseudocode here
  start
  initialize variable smallstr to store string(has been removed non alpha numeric characters)
  initialize variable reversed_words to store our reversed word
 initialize and declare regex pattern variable
 perform a regex search on passed word argument to remove non-alphanumeric characters and turn it into lowercase
 store the result in the smallstr varable
 reverse our smallstr and store the result in the reversed_words variable
 compare smallstr and reversed_words, if they are equal return true for palindrome, otherwise return false
 stop
  
*/

/*
  Add written explanation of your solution here
 The programm takes a string, performs a regular expression check to see if there are non alphanumeric characters.
 removes the non-alphanumeric characters and reverses the word.
 Finally the word is compared with the string without non alpha  numeric characters and if they are equal,
 the program returns true for a palindrome otherwise returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eye"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;

function isPalindrome(word) {
  let len = word.length; //Initialize length of the string
  for(let i = 0; i < len/2; i++){ //run through half of the word
    if(word[i] != word[len - i - 1]){ //Checks if the halves of the word are NOT equal
      return false; //Not a palindrome, ends code
    }
  }
  return true; //Is a palindrome
}

// Do not edit this line;
module.exports = isPalindrome;

function frequencyCounter(word) {
  var frq = {}; //Initialize the object
  for(let i = 0; i < word.length; i++){ //run through string/word
    let character = word.charAt(i); //Obtains character at current element position
    if(frq[character]){ //If the character exists and another is found
      frq[character]++; //Increment character counter
    }
    else{ 
      frq[character] = 1; //New character was found
    }
  }
  return frq; //Returns frequencies
}

// Do not edit this line;
module.exports = frequencyCounter;

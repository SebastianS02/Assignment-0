function setUnionOfAnyAmountOfSets(...args){
  let newSet = new Set; //Initialize new set
  for(let i = 0; i < args.length; i++){ //Run through list of arguments
    for(const element of args[i]){ //Run through each set in the arguments
      newSet.add(element); //.add only adds to new set if element doesn't already exist in that set
    }
  }     
  return newSet; //returns union of sets
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;

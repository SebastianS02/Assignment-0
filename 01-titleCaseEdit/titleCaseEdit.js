function titleCaseEdit(title) {
  const arr = title.split(" ");     //Splits title at every space
  for(let i = 0; i < arr.length; i++){  //runs through each word in the title
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); //Capitalizes first index of each array (each word)
  }
  const revisedTitle = arr.join(" "); //Combines the title after being split into separate arrays
  return revisedTitle; //return new and improved title
}

// Do not edit this line;
module.exports = titleCaseEdit;

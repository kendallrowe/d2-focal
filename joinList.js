// Function take array of string and join them into one string with comma separation
const joinList = function(arrayStringInputs) {
  let outputString = "";

  arrayStringInputs.forEach(function(currentString, index) {
    outputString += currentString;
    if (index !== arrayStringInputs.length - 1) {
      outputString += ", ";
    }
  });
  return outputString;
};


const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

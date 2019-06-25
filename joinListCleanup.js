// Function take array of string and join them into one string with comma separation
const joinList = function(arrayStringInputs) {
  let outputString = "";

  arrayStringInputs.forEach(function(currentString, index) {
    outputString += currentString;
    if (!isLastString(arrayStringInputs, index)) {
      outputString += ", ";
    }
  });
  return outputString;
};

const isLastString = function(arrayToCheck, index) {
  return index === arrayToCheck.length - 1;
};

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

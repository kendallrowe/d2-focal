// Take input string and apply obfuscate rules and output
const obfuscate = function(inputString) {
  let outputString = inputString;
  outputString = outputString.replace(/a/g, "4");
  outputString = outputString.replace(/e/g, "3");
  outputString = outputString.replace(/o/g, "0");
  outputString = outputString.replace(/l/g, "1");
  return outputString;
};

console.log(obfuscate("Kendall"));
console.log(obfuscate("password"));
console.log(obfuscate("abracadabra"));
console.log(obfuscate("audaciously"));
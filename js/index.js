function convertToRoman(num) {
  let romanChars = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let count = num;
  let romanString = ""; // String to contain result
  if (num < 0) { // Allows negative numbers, I don't think Romans had a representation for them but I thought this would be nice to have.
      count = -num;
      romanString += "-";
  }
  if (num == 0) {
    return "Nulla";
  }else if (!num.match(/\d/g)) {
    return "Invalid input, only numbers are accepted."
      // This validation shouldn't be required as the HTML input only allows numbers, but is here to double check.
  }
  for (let i = 0; i < numbers.length; i++) { // Loops through numbers array
    while (count >= numbers[i]) { 
      romanString += romanChars[i]; // If the count >= the number being checked, add the corresponding numeral to the result string
      count -= numbers[i]; // Remove the checked number from count, ready for the next loop
    }
  }
  return romanString;
}
function convert() {
  let number = document.getElementById('inputNum').value;
  document.getElementById('Numerals').innerHTML = convertToRoman(number);

}
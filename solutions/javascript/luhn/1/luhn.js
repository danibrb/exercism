//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (str) => {
  // Remove all non-digit characters
  const noSpace = str.replace(/\s+/g, '');

  // Check if the string contains only digits and has a length of at least 2
  const regex = /^\d+$/;
  if (!regex.test(noSpace) || noSpace.length < 2) {
    return false;
  }

  let sum = 0;
  // Iterate over the digits from right to left
  for (let i = noSpace.length - 2; i >= 0; i--) {
    let num = parseInt(noSpace.charAt(i), 10);

    // Double every second digit from the right
    if ((noSpace.length - i) % 2 === 0) {
      num *= 2;
      num = num > 9 ? num - 9 : num;
    }
    sum += num;
  }

  // Add the last digit (check digit) to the sum
  sum += parseInt(noSpace.charAt(noSpace.length - 1), 10);

  // Check if the sum is a multiple of 10
  return sum % 10 === 0;
};


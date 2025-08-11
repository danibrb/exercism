//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (str, shift) =>
  str.split('').map(c => /[a-zA-Z]/.test(c) ? shiftChar(c, shift) : c).join('');

export const shiftChar = (char, shift) => {
  const isUpperCase = char === char.toUpperCase();
  const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  const charCode = char.charCodeAt(0);
  const shiftedCharCode = ((charCode - base + shift) % 26 + 26) % 26 + base;
  return String.fromCharCode(shiftedCharCode);
};
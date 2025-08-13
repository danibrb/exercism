//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (bands) => {
  let valStr = [COLORS[bands[0]]];
  bands.length < 2 ? '' : valStr.unshift(COLORS[bands[1]]);
  valStr= valStr.reverse().join('')
  return Number(valStr);
};

export const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}
//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const clean = str.replace(/[\W\d_]/g,'').toLowerCase().split('');
  const unique = [...new Set(clean)];
  return unique.length === 26;
};

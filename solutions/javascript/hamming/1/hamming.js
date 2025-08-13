//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {
  const len1 = strand1.length;
  const len2 = strand2.length;
  if (len1 !== len2) {
    throw new Error('strands must be of equal length');
  }
  let distance = 0;
  for (let index = 0; index < len1; index++) {
    if (strand1[index] !== strand2[index]) {
      distance++;
    }
  }
  return distance;
};

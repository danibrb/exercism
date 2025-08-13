//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (input) => {
  const gigasec = 1e12;
  const time = input.getTime();
  return new Date(time+gigasec)
};

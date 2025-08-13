//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  if ((num%3 !== 0)&&(num%5 !== 0)&&(num%7 !== 0)){
    return num.toString();
  }
  const div3 = num%3 === 0 ? "Pling":'';
  const div5 = num%5 === 0 ? "Plang":'';
  const div7 = num%7 === 0 ? "Plong":'';
  return div3 + div5 + div7;
};

//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n, c=0) => {
  if ( n < 1){
    throw new Error('Only positive integers are allowed');
  }
  if ( n === 1){
    return c;
  }
  const m = n % 2 === 0 ? n/2 : n*3 +1;
  c++;
  return steps(m, c);
};

//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.numbers = [...Array(num).keys()].map(i => i + 1);
  }

  get sumOfSquares() {
    return this.numbers.reduce((acc, n)=> acc + n*n, 0);
  }

  get squareOfSum() {
    return (this.numbers.reduce((acc, n)=> acc + n, 0))**2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(a = 0, b = 0) {
    this.a = a;
    this.b = b;
  }

  get real() {
    return this.a;
  }

  get imag() {
    return this.b;
  }

  add(other) {
    return new ComplexNumber(this.a + other.real, this.b + other.imag);
  }

  sub(other) {
    return new ComplexNumber(this.a - other.real, this.b - other.imag);
  }

  div(other) {
    const denominator = other.real ** 2 + other.imag ** 2;
    return new ComplexNumber(
      (this.a * other.real + this.b * other.imag) / denominator,
      (this.b * other.real - this.a * other.imag) / denominator
    );
  }

  mul(other) {
    return new ComplexNumber(
      this.a * other.real - this.b * other.imag,
      this.b * other.real + this.a * other.imag
    );
  }

  get abs() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  get conj() {
    const imaginaryPart = this.b === 0 ? 0 : -this.b;
    return new ComplexNumber(this.a, imaginaryPart);
  }

  get exp() {
    const e = Math.exp(this.a);
    return new ComplexNumber(
      e * Math.cos(this.b),
      e * Math.sin(this.b)
    );
  }
}


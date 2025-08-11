//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    const [a, b, c] = sides;
    this.a = a;
    this.b = b;
    this.c = c;
  }

   isTriangle(){
    return (this.a+this.b)>=this.c && (this.b+this.c)>=this.a && (this.a+this.c)>=this.b &&
      this.a*this.b*this.c !== 0;
  }
  
  get isEquilateral() {
    if (this.isTriangle()){
      return this.a === this.b && this.b === this.c;
    }
    return false;
  }

  get isIsosceles() {
    if (this.isTriangle()){
      return this.a === this.b || this.b === this.c || this.a === this.c;
    }
    return false;
  }

  get isScalene() {
    if (this.isTriangle()) {
      return !this.isIsosceles;
    }
    return false;
  }
}

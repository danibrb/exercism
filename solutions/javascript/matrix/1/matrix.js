//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this.str = str;
    this.flat = str.split('\n');
    this.nrow = this.flat.length;
    this.ncol = this.flat[0] ? this.flat[0].split(' ').length : 0;
  }

  get rows() {
    return this.flat.map(row => row.split(' ').map(Number));
  }

  get columns() {
    const rows = this.rows;
    const cols = [];
    for (let i = 0; i < this.ncol; i++) {
      const col = [];
      for (let j = 0; j < this.nrow; j++) {
        col.push(rows[j][i]);
      }
      cols.push(col);
    }
    return cols;
  }
}
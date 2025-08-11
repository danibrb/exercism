//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => str.toUpperCase().split(/[\s-_]/).map(e => e = e[0]).join('');

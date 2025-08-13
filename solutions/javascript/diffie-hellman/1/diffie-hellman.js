//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export class DiffieHellman {
  constructor(p, g) {
    if (p<1 || g<1 || p>9999 || g>9999) throw new Error('error');
    if(!isPrime(p) || !isPrime(g)) throw new Error('error');
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey >= this.p || privateKey<2) throw new Error('error');
    return this.g ** privateKey % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p;
  }

  static getPrivateKey(p) {
    const key = Math.floor(Math.random() * (p - 3)) + 2;
    if (key >= p || key<2) throw new Error('error');
    return key;
  }
}

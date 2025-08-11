#include "square_root.h"

int square_root(int radicand) {
  float guess = radicand;
  float previous = radicand + 1;
  float epsilon = 0.00001;
  while ((previous - guess) > epsilon) {
    previous = guess;
    guess = (guess + radicand / guess) / 2;
    //printf("x = %f xp = %f\n", guess, previous);
  }
  return guess;
}

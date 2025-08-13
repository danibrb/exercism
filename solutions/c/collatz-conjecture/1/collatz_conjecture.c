#include "collatz_conjecture.h"


int steps(int start) {
  int c = 0;
  while (start > 1) {
    if (start % 2)
      start = 3 * start + 1;
    else
      start /= 2;
    c++;
  }

  if (start == 1)
    return c;
  return ERROR_VALUE;
}

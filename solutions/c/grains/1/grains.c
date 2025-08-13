#include "grains.h"


uint64_t square(uint8_t index) {
  if (index < 1 || index > 64)
    return 0;
  
  uint8_t i = index - 1;
  uint64_t grains = 1;
  while (i > 0) {
    grains *= 2;
    i--;
  }
  return grains;
}

uint64_t total(void) {
  uint64_t tot = 0;
  for (int i = 1; i < 65; i++)
    tot += square(i);
  return tot;
}
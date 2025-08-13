#include "binary_search.h"

const int *binary_search(int value, const int *arr, size_t length) {
  int l = 0;
  int r = length - 1;
  if (value < arr[l] || value > arr[r])
    return NULL;
  while (l <= r) {
    int m = (l + r) / 2;
    if(value==arr[m]) return &arr[m];
    if (value > arr[m])
      l = m + 1;
    else
      r = m - 1;
  }
  return NULL;
}

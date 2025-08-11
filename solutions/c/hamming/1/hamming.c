#include "hamming.h"

bool is_valid(const char *str1, const char *str2) {
  if (str1 == NULL || str2 == NULL)
    return false;
  if (strlen(str1) != strlen(str2))
    return false;
  return true;
}

int test(const char *str1, const char *str2) {
  int n = strlen(str1);
  int c=0;
  for (int i = 0; i < n; i++)
    if (str1[i] != str2[i])
      c++;
  return c;
}
int compute(const char *lhs, const char *rhs) {
  if (is_valid(lhs, rhs) == false)
    return -1;
  return test(lhs, rhs);
}
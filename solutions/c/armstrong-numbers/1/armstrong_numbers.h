#ifndef ARMSTRONG_NUMBERS_H
#define ARMSTRONG_NUMBERS_H

#include <stdbool.h>
#include <stdio.h>
#include <math.h>

int read();
int test();
int ndigit(int n);
int digit(int n, int p);
bool is_armstrong_number(int candidate);

#endif

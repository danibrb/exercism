#include "armstrong_numbers.h"

int read(){
    int n;
    printf("digit any number: ");
    scanf("%d", &n);
    return n;
}
int test(){
    int n;
    n = read();
    if(is_armstrong_number(n))
        printf("%d is an Armstrong number\n", n);
    else
        printf("%d is not an Armstrong number\n", n);
    return 0;
}

int ndigit(int n){
    int nd=0;
    while(n>0){
        nd++;
        n/=10;
    }
    return nd;
}

int digit(int n, int p){
    int d;
    for(int i=0;i<p;i++){
        d=n%10;
        n/=10;
    }
    return d;
}

bool is_armstrong_number(int candidate){
    int nd=ndigit(candidate);
    int s=0;
    for(int i=1;i<=nd;i++){
        int d=digit(candidate, i);
        s+=pow(d,nd);
    }
    if(s == candidate)
        return true;
    else
        return false;
}
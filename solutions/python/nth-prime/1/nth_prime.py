def is_prime(n):
    """"pre-condition: n is a nonnegative integer
    post-condition: return True if n is prime and False otherwise."""
    if n < 2: 
         return False;
    if n % 2 == 0:             
         return n == 2  # return False
    k = 3
    while k*k <= n:
         if n % k == 0:
             return False
         k += 2
    return True

def prime(n):
    if n == 0:
        raise ValueError('there is no zeroth prime')

    p = 1
    while n > 0:
        p += 1
        if is_prime(p):
            n -= 1
        
    return p
        

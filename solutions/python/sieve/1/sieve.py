def primes(n):
    not_prime_list = []
    prime_list = []
    for i in range(2, n+1):
        if i not in not_prime_list:  
            prime_list.append(i)
            for j in range(i*i, n+1, i):
                not_prime_list.append(j)
    return prime_list
        
    
    
    
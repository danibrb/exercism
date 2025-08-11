def factors(n):
    fac = []
    i = 2
    while n>1:
        if n%i == 0:
            fac.append(i)
            n /= i
        else:
            i += 1
    return fac

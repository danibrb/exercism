def steps(n):
    if n<1:
        raise ValueError("Only positive integers are allowed")
    s = 0
    while n>1:
        if n%2:
            n = 3*n + 1
        else:
            n /=2
        s += 1
    return s

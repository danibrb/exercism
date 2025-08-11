def square_root(n):
    if n<1:
        raise Exception("Sorry, no numbers below one")
    if not type(n) is int:
        raise TypeError("Only integers are allowed")

    p = 0.00000001
    xn = 1
    e = 10
    while e > p:
        xn1 = (xn + n/xn)/2
        e = abs(xn1 - xn)
        xn = xn1
        print(xn, e)
    return xn

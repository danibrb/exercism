def convert(n):
    s=''
    if n%3==0:
        s += "Pling"
    if n%5==0:
        s += "Plang"
    if n%7==0:
        s += "Plong"
    if n%3 and n%5 and n%7: return str(n)
    return s

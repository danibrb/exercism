def is_valid(isbn):
    isbn = isbn.replace('-', '')
    if len(isbn) != 10: return False
    if not isbn[:-1].isnumeric(): return False
    if isbn[-1].isalpha() and isbn[-1]!='X': return False
    last = 10 if isbn[-1]=='X' else int(isbn[-1])
    lst = list(isbn[:-1])
    num = list(range(10,1,-1))
    s = sum([int(d)*i for d,i in zip(lst, num)])
    return (s + last)%11 == 0

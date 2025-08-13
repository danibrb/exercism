out = 100
mid = 25
inn = 1

def score(x, y):
    p = x*x + y*y
    if p>out: return 0
    if p>mid: return 1
    if p>inn: return 5
    return 10
    

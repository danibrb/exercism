def sum_of_multiples(limit, multiples):
    multiples = [i for i in multiples if i != 0]
    mult = [[i for i in range(m,limit, m)] for m in multiples]
    mult = set([i for l in mult for i in l])
    return sum(mult)

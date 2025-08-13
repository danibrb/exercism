def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b):
        raise ValueError("Strands must be of equal length.")
    d = [1 for sa, sb in zip(strand_a, strand_b) if sa!=sb]
    return sum(d)
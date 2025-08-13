def to_rna(dna_strand):
    pairs = {'G':'C', 'C':'G', 'T':'A', 'A':'U'}
    return ''.join(pairs[n] for n in dna_strand)

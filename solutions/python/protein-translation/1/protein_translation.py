def proteins(strand):
    prot = {**dict.fromkeys(["AUG"], "Methionine"),                                **dict.fromkeys(["UUU", "UUC"], "Phenylalanine"),                      **dict.fromkeys(["UUA", "UUG"], "Leucine"),
            **dict.fromkeys(["UCU", "UCC", "UCA", "UCG"], "Serine"),
            **dict.fromkeys(["UAU", "UAC"], "Tyrosine"),
            **dict.fromkeys(["UGU", "UGC"], "Cysteine"),
            **dict.fromkeys(["UGG"], "Tryptophan"),
            **dict.fromkeys(["UAA", "UAG", "UGA"], "STOP"),
           }
    
    codons = [strand[i:i+3] for i in range(0, len(strand), 3)]
    codons = [prot[i] for i in codons]
    p = []
    for i in codons:
        if i == "STOP": break
        p.append(i)
    return p

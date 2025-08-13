def find_anagrams(word, candidates):
    w = list(word.lower())
    an = []
    for can in candidates:
        lst = list(can.lower())
        if w == lst:
            continue
        w.sort()
        lst.sort()
        if w == lst:
            an.append(can)
    return an

def is_pangram(sentence):
    alp = 'abcdefghijklmnopqrstuvwxyz'
    s = sentence.lower()
    for c in alp:
        if c not in s:
            return False
    return True

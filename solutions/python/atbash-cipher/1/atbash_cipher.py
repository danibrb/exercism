import re
import string
alpha = string.ascii_lowercase
rev = alpha[::-1]

LOOKUP = str.maketrans(alpha, rev)
RLOOKUP = str.maketrans(rev, alpha)

def encode(plain_text):
    plain_text = re.sub('[^A-Za-z0-9]+', '', plain_text).lower()
    
    t = plain_text.translate(LOOKUP)
    s = ''
    for i, c in enumerate(t):
        if i%5 == 0 and i!=0:
            s += ' '
        s += c
    return s


def decode(ciphered_text):
    ciphered_text = ciphered_text.replace(' ', '')
    return ciphered_text.translate(RLOOKUP)
    

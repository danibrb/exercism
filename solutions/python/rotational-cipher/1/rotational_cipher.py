import string as s
def rotate(text, key):
    low = s.ascii_lowercase
    upp = s.ascii_uppercase
    return ''.join(chr((ord(c) - 97 + key)%26 + 97) if c in low
                   else chr((ord(c) - 65 + key)%26 + 65) if c in upp
                   else c for c in text)

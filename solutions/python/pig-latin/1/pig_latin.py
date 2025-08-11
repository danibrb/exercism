def translate(texts):
    texts = texts.split()
    rule1 = ['a','e', 'i', 'o', 'u', 'xr', 'yt']
    end = "ay"
    s =''
    for text in texts:
        for start in rule1:
            if text.startswith(start):
                return text + end
        con =''
        vowels = 'aeiou'
        for i, c in enumerate(text):
            if c not in vowels:
                con += c
                if c == 'q' and text[i+1] == 'u':
                    con += 'u'
                if text[i+1] == 'y':
                    break
            else:
                break
        s += (text[len(con):] + con + end) + ' '
    return s.strip()

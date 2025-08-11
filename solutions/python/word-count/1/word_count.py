import string
def count_words(s):
    d = {}
    s = s.lower()
    delimiters = string.punctuation
    delimiters = delimiters.replace("'","")
    for delimiter in delimiters:
        s = " ".join(s.split(delimiter))
    result = s.split()
    print(result)
    l = []
    for i in result:
        l.append(i.strip("'"))
    l = [i for i in l if i]
    for i in l:
        d[i]= l.count(i)
    print(d)
    return d
    
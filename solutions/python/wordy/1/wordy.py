def answer(question):
    question = question.replace('by', '').replace('?', '')
    words = question.split()
    op = ['plus', 'minus', 'multiplied', 'divided']
    print(words)
    l = len(words)

    if l==3 and words[2].isnumeric(): return int(words[2])
    
    if (l>2 and words[2] in op) or (l>2 and words[3].isnumeric()):
        raise ValueError("syntax error")
    if words[0]!="What" or (l>2 and words[3] not in op):
        raise ValueError("unknown operation")
    if l!=5 and l!=7 and l!=3:
        raise ValueError("syntax error")
            
    if l==7:
        _,_,a, o, b, p, c = words
    else:
        _,_,a, o, b = words

    a = int(a)
    b = int(b)
    if o=='plus': d = a+b
    if o=='minus': d = a-b
    if o=='multiplied': d = a*b
    if o=='divided': d = a//b

    if l==5: return d

    c = int(c)
    if p=='plus': r = d+c
    if p=='minus': r = d-c
    if p=='multiplied': r = d*c
    if p=='divided': r = d//c

    return r
    
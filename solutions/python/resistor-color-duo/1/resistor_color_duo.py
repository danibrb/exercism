col = {'black': 0, 'brown': 1, 'red': 2, 'orange': 3, 'yellow': 4,
         'green': 5, 'blue': 6, 'violet': 7, 'grey': 8, 'white': 9}

def value(colors):
    if len(colors)>2:
        r1, r2, _ = colors
    else:
        r1, r2 = colors
    return col[r1]*10 + col[r2]
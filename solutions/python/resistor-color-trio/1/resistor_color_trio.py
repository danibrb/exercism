col = {'black': 0, 'brown': 1, 'red': 2, 'orange': 3, 'yellow': 4,
         'green': 5, 'blue': 6, 'violet': 7, 'grey': 8, 'white': 9}


def label(colors):
    b1, b2, *b3 = colors
    val = (col[b1]*10 + col[b2])*10**col[b3[0]]
    print(val)
    pre = ''
    o = 'ohms'
    if val == 0: 1
    elif val%1e9 == 0:
        val = val//1e9
        pre = 'giga'
    elif val%1e6 == 0:
        val = val//1e6
        pre = 'mega'
    elif val%1e3 == 0:
        val = val//1e3
        pre = 'kilo'
    print(f'{val:.0f} {pre}{o}')
    return f'{val:.0f} {pre}{o}'
        

col = {'black': 0, 'brown': 1, 'red': 2, 'orange': 3, 'yellow': 4,
         'green': 5, 'blue': 6, 'violet': 7, 'grey': 8, 'white': 9}

tol = {'grey':0.05, 'violet':0.1, 'blue':0.25, 'green':0.5,
       'brown':1, 'red':2, 'gold':5, 'silver':10}

def resistor_label(colors):
    l = len(colors)
    if l == 1 and colors[0] == "black": return "0 ohms"
    if l == 4:
        v1, v2, m, t = colors
        v3 = 'black'
        p1, p2, p3 = 10, 1, 0
    else:
        v1, v2, v3, m, t = colors
        p1, p2, p3 = 100, 10, 1
    val = (col[v1]*p1 + col[v2]*p2 + col[v3]*p3)*10**col[m]
    print(val)
    pre = ''
    o = 'ohms'
    if val == 0: 1
    elif val>1e9:
        val = val/1e9
        pre = 'giga'
    elif val>1e6:
        val = val/1e6
        pre = 'mega'
    elif val>1e3:
        val = val/1e3
        pre = 'kilo'
    if val*10%10 == 0:
        val = int(val)
    print(f'{val} {pre}{o} ±{tol[t]}%')
    return f'{val} {pre}{o} ±{tol[t]}%'

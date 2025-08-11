actions = ["wink", "double blink", "close your eyes", "jump", "rev"]

def commands(binary_str):
    if binary_str == "00000": return []
    binary_str = binary_str[::-1]
    h = []
    for i, b in enumerate(binary_str):
        if b=='1':
            h.append(actions[i])
    if h[-1] == 'rev':
        h = h[::-1]
        h = h[1:]
    return h

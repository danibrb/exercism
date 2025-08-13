def flatten(iterable):
    flat = []
    for item in iterable:
        if item == None:
            continue
        if type(item) != list:
            flat.append(item)
        else:
            flat.extend(flatten(item))
    return flat
        

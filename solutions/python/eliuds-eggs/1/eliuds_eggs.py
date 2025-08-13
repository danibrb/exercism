def egg_count(val):
    print(val)
    bval = bin(val)
    print(bval)
    bit = [1 for b in bval if b =='1']
    return sum(bit)

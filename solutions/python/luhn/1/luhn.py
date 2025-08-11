class Luhn:
    def __init__(self, card_num):
        self.num = card_num

    def valid(self):
        n = self.num.replace(' ', '')
        if len(n)<2: return False
        if not n.isnumeric(): return False
        n =list(n)[::-1]
        print(n)
        s = c = 0
        for i, d in enumerate(n):
            d = int(d)
            if i%2:
                c = 2*d
                if c>9:
                    c -= 9
            else:
                c = d
            s += c
        return s%10 == 0
                

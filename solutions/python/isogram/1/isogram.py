def is_isogram(string):
    string = string.lower()
    string = string.replace(' ', '')
    string = string.replace('-', '')
    cnt = sum([string.count(c) for c in string])
    return cnt == len(string)
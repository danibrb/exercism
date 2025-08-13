def is_armstrong_number(number):
    num = list(str(number))
    return number == sum([int(n)**len(num) for n in num])

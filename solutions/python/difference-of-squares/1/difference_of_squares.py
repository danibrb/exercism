def square_of_sum(number):
    s = sum([n for n in range(number+1)])
    return s**2


def sum_of_squares(number):
    s = sum([n**2 for n in range(number+1)])
    return s


def difference_of_squares(number):
    return square_of_sum(number) - sum_of_squares(number)

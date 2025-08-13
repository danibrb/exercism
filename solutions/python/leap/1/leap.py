def leap_year(year):
    if year%100 == 0:
        return True if year%400 == 0 else False
    return year%4 == 0

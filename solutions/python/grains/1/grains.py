def square(number):
    if not 0<number<65:
        raise ValueError("square must be between 1 and 64")
    grain = 1
    for n in range(number-1):
        grain*=2
    return grain


def total():
    return sum([square(n) for n in range(1,65)])

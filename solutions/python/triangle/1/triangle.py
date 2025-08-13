def istriangle(sides):
    a, b, c = sides
    if a>0 and b>0 and c>0:
        return a+b>=c and b+c>=a and a+c>=b
    return False

def equilateral(sides):
    if istriangle(sides):
        a, b, c = sides
        return a==b==c
    return False


def isosceles(sides):
    if istriangle(sides):
        a, b, c = sides
        return a==b!=c or a==c!=b or b==c!=a or a==b==c
    return False


def scalene(sides):
    if istriangle(sides):
        a, b, c = sides
        return a!=b!=c!=a
    return False

import math
class ComplexNumber:
    def __init__(self, real=0, imaginary=0):
        self.real = real
        self.imaginary = imaginary

    def __eq__(self, other):
        a = self.real == other.real
        b = self.imaginary == other.imaginary
        return a and b
        
    def __add__(self, other):
        if isinstance(other, (float,int)):
            other = ComplexNumber(other)
        a = self.real + other.real
        b = self.imaginary + other.imaginary
        return ComplexNumber(a, b)

    def __mul__(self, other):
        if isinstance(other, (float,int)):
            other = ComplexNumber(other)
        a = self.real
        b = self.imaginary
        c = other.real
        d = other.imaginary
        re = a * c - b * d
        im = b * c + a * d
        return ComplexNumber(re, im)

    def __sub__(self, other):
        if isinstance(other, (float,int)):
            other = ComplexNumber(other)
        a = self.real - other.real
        b = self.imaginary - other.imaginary
        return ComplexNumber(a, b)

    def __truediv__(self, other): 
        if isinstance(other, (float,int)):
            other = ComplexNumber(other)
        a = self.real
        b = self.imaginary
        c = other.real
        d = other.imaginary
        z = c*c + d*d
        re = (a * c + b * d) / z
        im = (b * c - a * d) / z
        return ComplexNumber(re, im)

    def __abs__(self):
        a = self.real
        b = self.imaginary
        return (a*a + b*b)**0.5

    def conjugate(self):
        a = self.real
        b = self.imaginary
        return ComplexNumber(a, -b)

    def exp(self):
        a = self.real
        b = self.imaginary
        re = math.exp(a)*math.cos(b)
        im = math.exp(a)*math.sin(b)
        return ComplexNumber(re, im)

    def __radd__(self, other):
        return self.__add__(other)

    def __rsub__(self, other):
        other = ComplexNumber(other)
        return other.__sub__(self)
    
    def __rmul__(self, other):
        return self.__mul__(other)
    
    def __rtruediv__(self, other):
        other = ComplexNumber(other)
        return other.__truediv__(self)

    

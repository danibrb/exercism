def classify(num):
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """
    if num<1:
        raise ValueError("Classification is only possible for positive integers.")
    
    fact = sum([n for n in range(1,num) if num%n == 0])

    if num>fact: return "deficient"
    if num<fact: return "abundant"
    return "perfect"
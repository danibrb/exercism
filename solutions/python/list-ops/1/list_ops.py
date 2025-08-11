def append(list1, list2):
    return list1 + list2


def concat(lists):
    list = []
    for lst in lists:
        list += lst
    return list


def filter(function, list):
    return [i for i in list if function(i)==True]


def length(list):
    return len(list)


def map(function, list):
    return [function(i) for i in list]


def foldl(function, list, initial):
    [initial := function(initial, x) for x in list]
    return initial


def foldr(function, list, initial):
    [initial := function(initial, x) for x in list[::-1]]
    return initial


def reverse(list):
    return list[::-1]

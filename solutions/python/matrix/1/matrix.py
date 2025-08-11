class Matrix:
    def __init__(self, matrix_string):
        l = matrix_string.split('\n')
        self.m = [[int(i) for i in r.split()] for r in l]

    def row(self, index):
        return self.m[index-1]

    def column(self, index):
        return [r[index-1] for r in self.m]

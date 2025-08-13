class Queen:
    def __init__(self, row, col):
        # if the row parameter is negative
        if row < 0: raise ValueError("row not positive")

        # if the row parameter is not on the defined board
        if row > 7: raise ValueError("row not on board")
        
        # if the column parameter is negative
        if col < 0: raise ValueError("column not positive")
        
        # if the column parameter is not on the defined board
        if col > 7: raise ValueError("column not on board")

        self.row = row
        self.col = col

    def can_attack(self, oq):
        # if both the queens are on the same location
        if self.row == oq.row and self.col == oq.col:
            raise ValueError("Invalid queen position: both queens in the same square")
        if self.row == oq.row or self.col == oq.col:
            return True
        if self.row - self.col == oq.row - oq.col:
            return True
        if self.row + self.col == oq.row + oq.col:
            return True
        return False
        

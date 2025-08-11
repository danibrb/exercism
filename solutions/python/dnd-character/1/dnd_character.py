import random as rd

class Character:
    def __init__(self):
        self.strength = dice()
        self.dexterity = dice()
        self.constitution = dice()
        self.intelligence = dice()
        self.wisdom = dice()
        self.charisma = dice()
        self.hitpoints = 10 + modifier(self.constitution)

    def ability(self):
        return self.strength

def modifier(value):
    return (value - 10)//2

def dice():
    launch = [rd.randint(1,6) for l in range(4)]
    launch.remove(min(launch))
    return sum(launch)
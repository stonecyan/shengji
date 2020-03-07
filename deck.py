import numpy as np


class Deck(object):

    NON_NUMERICAL_CARDS = ['Ace', 'Jack', 'Queen', 'King']
    NUMERICAL_CARDS = list(range(2, 11))
    JOKERS = ['Small Joker', 'Big Joker']
    SUITS = ['Hearts', 'Spades', 'Clubs', 'Diamonds']

    def __init__(self):
        self.cards = self._cards()

    def show(self):
        print(self.cards)

    def shuffle(self):
        np.random.shuffle(self.cards)

    def _cards(self):
        card_values = self.NON_NUMERICAL_CARDS + self.NUMERICAL_CARDS
        return ['{}-{}'.format(value, suit) for value in card_values for suit in self.SUITS] + self.JOKERS

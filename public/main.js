let deck = []

const createDeck = () => {
  // 1. create an array with suits
  let suits = ['Spade', 'Heart', 'Diamond', 'Club']
  // 2. create with cards with values
  let cards = [[2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], ['Jack', 10], ['Queen', 10], ['King', 10], ['Ace', 11]]
  // 4. create the deck
  suits.forEach(suit => {
    cards.forEach(card => {
      deck.push(card.concat(suit))
    })
  })
}

document.addEventListener('DOMContentLoaded', createDeck)

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
  // 5. Shuffle deck
  // Bruno showed me this in our search, but cant explain.
  // deck.sort(element => Math.random() - 0.5)

  let i = 0
  let j = 0
  let temp = null

  for (i = 0; i < deck.length; i++) {
    j = Math.floor(Math.random() * (i + 1))
    temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  // deck.forEach(element => {
  //   console.log(element)
  // })
}


document.addEventListener('DOMContentLoaded', createDeck)

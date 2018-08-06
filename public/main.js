let deck = []
let houseHand = []
let playerHand = []

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

const dealButtonClickEvent = () => {
  // deal two cards out to the dealer
  houseHand.push(deck.pop())
  houseHand.push(deck.pop())
  // go into the deck and retrieve to cards and remove from deck
  // top two cards dealt out
  // assign the dealer two cards

  // deal two cards to player
  playerHand.push(deck.pop())
  playerHand.push(deck.pop())

  // show the hand to the player
  document.querySelector('#player-card1').innerHTML = playerHand[0]
  document.querySelector('#player-card2').innerHTML = playerHand[1]
}

const hitButtonClickEvent = () => {
  // player can now hit and draw another card or stand
  // if the player hits, draw another card that it's displayed
  let drawnCard = deck.pop()
  const newLi = document.createElement('li')
  newLi.textContent = drawnCard
  document.querySelector('#player-hand').appendChild(newLi)
  console.log(drawnCard)
  playerHand.push(drawnCard)
}

document.querySelector('.hit-button').addEventListener('click', hitButtonClickEvent)
document.querySelector('#deal-button').addEventListener('click', dealButtonClickEvent)
document.addEventListener('DOMContentLoaded', createDeck)

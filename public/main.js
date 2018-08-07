let deck = []
let houseHand = []
let playerHand = []
let playerScore = 0
let houseScore = 0

const createDeck = () => {
  // 1. create an array with suits
  let suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
  // 2. create cards with values (array inside and array)
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
  document.querySelector('#player-card1').textContent = playerHand[0][0] + ' of ' + playerHand[0][2]
  document.querySelector('#player-card2').textContent = playerHand[1][0] + ' of ' + playerHand[1][2]
  document.querySelector('#house-card1').textContent = houseHand[0][0] + ' of ' + houseHand[0][2]
  playerScore += playerHand[0][1] + playerHand[1][1]
  houseScore += houseHand[0][1]
  // console.log(playerScore)
  document.querySelector('.player-results').textContent = playerScore  
  document.querySelector('.house-results').textContent = playerScore  
  // add the value of player hand
}

const hitButtonClickEvent = () => {
  // player can now hit and draw another card or stand
  // if the player hits, draw another card
  let drawnCard = deck.pop()
  const newLi = document.createElement('li')
  // console.log(drawnCard)
  newLi.textContent = drawnCard[0] + ' of ' + drawnCard[2]
  document.querySelector('#player-hand').appendChild(newLi)
  playerHand.push(drawnCard)
}
// add the value for the cards dealt

document.querySelector('.hit-button').addEventListener('click', hitButtonClickEvent)
document.querySelector('#deal-button').addEventListener('click', dealButtonClickEvent)
document.addEventListener('DOMContentLoaded', createDeck)

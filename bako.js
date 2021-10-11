//preparing
const SUITS = ["s", "c", "h", "d"]
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "J",
  "Q",
  "K"
]

class Deck {
    constructor(cards = freshDeck()) {
      this.cards = cards
    }
  
    get numberOfCards() {
      return this.cards.length
    }
  
    pop() {
      return this.cards.shift()
    }
  
    push(card) {
      this.cards.push(card)
    }
  
    shuffle() {
      for (let i = this.numberOfCards - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
      }
    }
  }

  function freshDeck() {
    return SUITS.flatMap(suit => {
      return VALUES.map(value => {
        return new Card(suit, value)
      })
    })
  }


  class Card {
    constructor(suit, value) {
      this.suit = suit
      this.value = value
    }
  
    get color() {
      return this.suit === "c" || this.suit === "s" ? "black" : "red"
    }
  
    getHTML() {
      const cardDiv = document.createElement("div")
      cardDiv.innerText = this.suit
      cardDiv.classList.add("card", this.color)
      cardDiv.dataset.value = `${this.value} ${this.suit}`
      return cardDiv
    }
  }
 

  const wii=new Deck()
  wii.shuffle();

  const places=window.document.querySelectorAll(".card");

  function habet(carta,index) {
    places[index].src="./Carta/"+carta.value+"."+carta.suit+".png";
    return carta.value+carta.suit+".png";
  }

for (let i = 0; i < places.length; i++) {
  habet(wii["cards"][i],places[i])  
}

  






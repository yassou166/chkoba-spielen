//preparing
const SUITS = ["s", "c", "h", "d"]
const VALUES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "9",
  "8",
  "10"
]

class Deck {
    constructor(cards = freshDeck()) {
      this.cards = cards
    }
  
    get numberOfCards() {
      return this.cards.length
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

  }

  class kaf {
    constructor(cards) {
      
    }


  }
  const wii=new Deck()
  wii.shuffle();

  const places=window.document.querySelectorAll(".card");

  function habet(carta) {
    let link="./Carta/"+carta.value+"."+carta.suit+".png";
    return link;
  }
 

  let kaf1=new kaf();
  let yedek1=document.querySelectorAll(".Ycard")
  /*let kaf2=new kaf();
  let yedek2=[Element]*3*/
  
//game rules
let CardIndex=0
let turn=0

function GetValue(i) {
  if (places[i].getAttribute("src")!=="") {
    
    let link=habet(wii["cards"][i]);
    let ch=link.slice(link.lastIndexOf("/"),link.length);
    alert(ch.slice(1,ch.indexOf(".")))
    return ch.slice(1,ch.indexOf("."))
  }
}

function GetValueFromKaf(i) {
  if (yedek1[i].getAttribute("src")!=="") {
    
    let link=habet(kaf1);
    let ch=link.slice(link.lastIndexOf("/"),link.length);
    alert(ch.slice(1,ch.indexOf(".")))
    return ch.slice(1,ch.indexOf("."))
  }
}

for (let i = CardIndex; i < 4; i++) {
  places[i].src=habet(wii["cards"][i]);  
  CardIndex=i
} 
CardIndex=4
for (let i = 0; i <= 2 ; i++) {
  kaf1[i]=wii["cards"][i+CardIndex]
  yedek1[i].src=habet(kaf1[i]);
  //kaf2[i]=wii["cards"][i+CardIndex+3]
}
 


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
      this.cards=cards;
    }
  }
  const wii=new Deck()
  wii.shuffle();

  fer8a=new Card(0,"0")
  const places=window.document.querySelectorAll(".card");

  function habet(carta) {
    let link="./Carta/"+carta.value+"."+carta.suit+".png";
    return link;
  }
 

  let kaf1=new kaf();
  let tawla=new kaf();
  let yedek1=document.querySelectorAll(".Ycard")

  /*let kaf2=new kaf();
  let yedek2=[Element]*3*/
  
  //game rules
let sels=new Array(8)
let CardIndex=0
let turn=0
let val,som=0;
let Sel;
let k=0;

for (let i = 0; i < sels.length; i++) {
  sels[i]=-1;
}
function GetValue(i) {
  if (places[i].getAttribute("src")!=="") {
    let link=habet(wii["cards"][i]);
    let ch=link.slice(link.lastIndexOf("/"),link.length);
    if (sels.indexOf(i)==-1) { 
      som+=parseInt(ch.slice(1,ch.indexOf(".")))
      k++;
      sels[k]=i;
      Play();
      //alert(som);
    }
    return ch.slice(1,ch.indexOf("."));
  }
}

function findPos() {
  let t=-1
  for (let i = 0; i < places.length; i++) {
    if (places[i].getAttribute("src")=="") {
      t=i;
      break
    }
  }
  return t;
}

a=0
function GetValueFromKaf(i) {
  
  let link=habet(kaf1[i]);
  let ch=link.slice(link.lastIndexOf("/"),link.length);
  if (val == parseInt(ch.slice(1,ch.indexOf(".")))){ 
    a+=1

  }else{
    a=0
  }

  if (moves <  1){
    egri(CardIndex);
    moves=3;
    a=0;
    som=0
    val=0
  }

  if (a > 1 &&  yedek1[i].getAttribute("src") !="" ) {
    
    places[findPos()].src=yedek1[i].src;
    yedek1[i].src="";
    moves--;
    alert("hbat rani");
  }
  if (yedek1[i].getAttribute("src")!=="") {
    
    //alert(ch.slice(1,ch.indexOf(".")))
    val=parseInt(ch.slice(1,ch.indexOf(".")));
    Sel=yedek1[i];
    Play();
    som=0
    Reset();
    return ch.slice(1,ch.indexOf("."))
  }
}

for (let i = CardIndex; i < 4; i++) {
  tawla[i]=wii["cards"][i]
  places[i].src=habet(tawla[i]);  
  CardIndex=i
}

function egri(cardindice) {
  for (let i = 0; i <= 2 ; i++) {
    kaf1[i]=wii["cards"][i+cardindice]
    yedek1[i].src=habet(kaf1[i]);
    CardIndex=cardindice+3;
    //kaf2[i]=wii["cards"][i+CardIndex+3]
  }  
}

egri(4);

moves=3
function Play() {
  if (val == som && val!=0) {
    val=0
    Sel.src=""
    moves-=1;
    for (let i = 0; i < 8; i++) {
      if (sels[i] != -1) {
        t=sels[i]
        places[t].src=""
      }
    }
    
    Reset();
    som=0
  }
}

function Reset() {
  for (let i = 0; i < 8; i++) {
    sels[i]=-1
  }
}

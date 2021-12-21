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

const cardnumber=40;
class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }
    
  
    shuffle() {
      for (let i = cardnumber - 1; i > 0; i--) {
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

  }

  class kaf {
    constructor(cards) {  
      this.cards=cards;
    }
  }

  const wii=new Deck()
  //wii.shuffle();

  fer8a=new Card("0","0")
  const places=window.document.querySelectorAll(".card");


  function habet(carta) {
    let link="./Carta/"+carta.value+"."+carta.suit+".png"
    //alert(link);
    return link;
  }
 

  let kaf1=new kaf();
  let kaf2=new kaf();
  let tawla=new kaf();
  let mekla=new kaf();
  let mekla2=new kaf();
  let yedek1=document.querySelectorAll(".Ycard")

  let sels=new Array(8)
  let sel;
  let yi=-1;
  let val,som=0;
  let a=0;
  let MeklaCounter=0;
  let shkoba = 0;

  let cardindice=7;
  let moves=3;


  function Reset() {
    for (let i = 0; i < 8; i++) {
      sels[i]=-1
    }
}

function THabet() {
  for (let i = 0; i < places.length; i++) {
    places[i].src=habet(tawla[i]);
  }

}

// Enemy
const AssistedNumber = [
  ["1"],
  ["1,1","2"],
  ["1,2","1,1,1","3"],
  ["1,3","2,2","4"],
  ["2,3","4,1","5"],
  ["3,3","4,2","5,1","3,2,1","3,1,1,1","6"],
  ["4,3","5,2","6,1","7"],
  ["4,4","5,3","6,2","7,1","8"],
  ["5,4","6,3","7,2","8,1","9"],
  ["5,5","6,4","7,3","8,2","9,1","10"]
]


function Enemy(m,as) {
  let t=[0,0,0,0];
  let t1=Array();
  n=Number(m);
  let ch="";
  let f="";
  alert(as[n-1].length)
  for (let j = 0; j < 8; j++) {
    t[j]=Number(tawla[j].value);
    t1[j]=Number(tawla[j].value);
  }
  t1=t1.sort()
  t1=t1.reverse();
  for (let i = 0; i < t1.length; i++) {
    ch+=t1[i]+","    
  }
  ch.replace("0","")
  for (let i = 0; i < as[n-1].length; i++) {
      if (ch.indexOf(as[n-1][i])!=-1 ) {
        f=as[n-1][i]
        f.replace(",","");
        console.log("f="+f);
        break
      }    
    }
    return f;
}


  function Kol(f) {    
    for (let l = 0; l < f.length; l++) {
      for (let l1 = 0; l1 < t.length; l1++) {
        if (f[l]==t[l1]) {
          t[l1]="0"
          tawla[l1]=fer8a
        }
      }
    }

    alert(" chkoba AI has eaten "+n+" with "+f);
    THabet()
  }

function EN() {
   for (let i = 0; i < yedek1.length; i++) {
     if (Enemy(yedek1[i].value,AssistedNumber)!="") {
      Kol(f);    
      break;
     }
   }
}


// fin enemy
function findPos() {
  let t=-1
  for (let i = 0; i < places.length; i++) {
    if (tawla[i]==fer8a) {
      t=i;
      break
    }
  }
  return t;
}

function Play() {
    if (val==som && som!=0) {
        val=0;
        sch=true;
        som=0;
        sel.src="";
        mekla[MeklaCounter]=kaf1[yi];
        MeklaCounter++;
        kaf1[yi]=fer8a;
        for (let i = 0; i < 8; i++) {
          if (sels[i] != -1) {
            p=sels[i]
            mekla[MeklaCounter]=tawla[p];          
            MeklaCounter++;
              tawla[p]=fer8a;
            }
            
          }
          for (let i = 0; i < 8; i++) { 
            if (tawla[i].value != 0) {
              sch=false;
            }
          }
          
          if (sch) {
            alert("shkobbbbaaaaaaaaa sa7a howa")
            shkoba++;
            sch=false;
          }
          Reset();
          moves--;
          THabet();
          Enemy();     
        }
        if (moves < 1) {
          egri(4);
          moves=3;
        }
}

    
function GetValue(i) {
    if (sels.indexOf(i) == -1) {
        som+=parseInt(tawla[i].value);
        sels[sels.indexOf(-1)]=i;
    }
    if (som > val) {
      Reset();
      som=0
      val=0
    }
    Play();
}

    function GetKaf(i) {
        sel=yedek1[i];
        val=parseInt(kaf1[i].value);

        if (yi==i){ 
          a+=1
      
        }else{
          a=0
        }
        yi=i;
        
        if (a > 3 && kaf1[i]!=fer8a) {
          a=0;
          moves--;
          places[findPos()].src=habet(kaf1[i]);
          tawla[findPos()]=kaf1[i];
          kaf1[i]=fer8a;
          sel.src=""
          val=0;
          Enemy();
        }

        Reset()
        Play();
    }
  
  function Score() {
    let Score=0;
    let shkoba=0
    let haya=false,bermilla=0 ,dineri=0;
    for (let c = 0; c < cardnumber; c++) {
      
      if (mekla[c].value==7) {
        bermilla++;
      }

      if (mekla[c].suit="d") {
        dineri++;
        if (mekla[c].value) {
          haya+=1;
        }
      }       
    }

  if (MeklaCounter>20) {
    Score++;
  }

  if (bermilla>2) {
    Score++;
  }

  if (haya) {
    Score++;
  }

  if (dineri > 5) {
    Score++;
  }

  score+=shkoba
  return Score;
}

function egri() {
  if (cardindice+3<=cardnumber) {
    for (let i = 0; i <= 2 ; i++) {
      kaf1[i]=wii["cards"][i+cardindice]
      yedek1[i].src=habet(kaf1[i]);
      kaf2[i]=wii["cards"][i+cardindice+3]
    }  
    cardindice+=3;
  }
  else{
    alert("bennacer kesa7 ");  
    /*alert(Score());
    alert(MeklaCounter);*/

    document.write(score);
    
  }
}


 


//playing
for (let i = 0; i < 4; i++) {
    tawla[i]=wii["cards"][i]
    places[i].src=habet(tawla[i]);
    tawla[i+4]=fer8a
}


egri()
Reset();

    

   
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
  wii.shuffle();

  fer8a=new Card("0","0")
  const places=window.document.querySelectorAll(".card");


  function habet(carta) {
    let link="./Carta/"+carta.value+"."+carta.suit+".png"
    //
    return link;
  }
 
  let dawr=0;

  let kaf1=new kaf();
  let kaf2=new kaf();
  let tawla=new kaf();
  let chye7=new kaf();
  let mekla=new kaf();
  let mekla2=new kaf();
  let yedek1=document.querySelectorAll(".Ycard")

  let holder=document.querySelector("#Preview")
  let sels=new Array(8)
  let sel;
  let yi=-1;
  let val,som=0;
  let a=0;
  let MeklaCounter=0;
  let MeklaCounter2=0;
  let shkoba = 0;
  let shkoba2 = 0;

  let cardindice=4;
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
  ["2","1,1"],
  ["3","1,2","1,1,1"],
  ["4","1,3","2,2"],
  ["5","2,3","4,1"],
  ["6","3,3","4,2","5,1","3,2,1","3,1,1,1"],
  ["7","4,3","5,2","6,1","4,2,1","5,1,1","2,2,2,1","2,2,1,1,1"],
  ["8","4,4","5,3","6,2","7,1","6,1,1","5,2,1","5,1,1,1"],
  ["9","5,4","6,3","7,2","8,1","3,3,3","3,3,2,1","3,2,2,2","3,2,2,1,1","3,2,1,1,1,1"],
  ["k","5,5","6,4","7,3","8,2","9,1"]
]

let as=AssistedNumber;
let t=[0,0,0,0];
let t1=Array();

function Enemy(m) {
  let ch="";
  let ch1="";

  n=Number(m);
  let f="";
  let d=0;
  for (let j = 0; j < 8; j++) {
    t[j]=Number(tawla[j].value);
    t1[j]=Number(tawla[j].value);
    if (t[j]=="10") {
      t[j]="k"
      t1[j]="k"
    }
  }

  t1=t1.sort()
  t1=t1.reverse();
  for (let i = 0; i < t1.length; i++) {
    ch  += t1[i]+","    
    ch1 += t1[i]+","    
  }


  let mimi=as[Number(n-1)].length
  for (let i = 0; i < mimi; i++) {
    f=""
    for (let j = 0; j < ch.length; j++) { 
      if (ch1.indexOf(as[n-1][i][j])!=-1 ) {
        f+=ch1[ch1.indexOf(as[n-1][i][j])];
        ch1=ch1.substring(0,ch1.indexOf(as[n-1][i][j]))+"0"+ch1.substring(ch1.indexOf(as[n-1][i][j])+1,ch1.length);
        console.log("f="+f);
      }    
    }
    d=i
    
    
    if (f=="k") {
      return "10";
    }
    if (f==as[n-1][d]) {
      return f;
    }
  }
    return ""
}

  function Kol(f,n) {    
    for (let l = 0; l < f.length; l++) {
      for (let l1 = 0; l1 < t.length; l1++) {
        if (f[l]==tawla[l1].value) {
          t[l1]="0"
          mekla2[MeklaCounter2]=tawla[l1]
          MeklaCounter2++;
          tawla[l1]=fer8a
        }
        if (f==10 && f==tawla[l1].value) {
          t[l1]="0";
          mekla2[MeklaCounter2]=tawla[l1];
          MeklaCounter2++;
          tawla[l1]=fer8a;
          THabet();
          return;
        }
      }
    }
    THabet();
  }

  function Tri() {
    for (let i = 0; i < 3; i++) {
      m=i
      for (let j = i; j < 3; j++) {
        if (Number(kaf2[j].value) > Number(kaf2[m].value)) {
          m=j;
        }
      }

      v=kaf2[i];
      kaf2[i]=kaf2[m];
      kaf2[m]=v;
    }
    return kaf2
  }

  let PrCard=document.querySelector(".Prcard")
  let Pranim=document.querySelector(".Preview")
  function Wari(x) {
    Pranim.classList.remove('an'); // add the class name to that element
    PrCard.src=x;
    
    Pranim.classList.add('an'); // add the class name to that element
  }

function EN() {
  kaf2=Tri();
  let f;
  for (let i = 0; i < 3; i++) {
    if (kaf2[i] != fer8a) { 
        //holder.src=habet(kaf2[i])
        f=(Enemy(kaf2[i].value))
        
        if (f != "") {
          Kol(f,kaf2[i].value);    
          Wari(habet(kaf2[i]))
          mekla[MeklaCounter2]=kaf2[i];
          MeklaCounter2++;
          kaf2[i]=fer8a;
          let sch=true;
          for (let i = 0; i < 8; i++) { 
            if (tawla[i].value != 0) {
              sch=false;
            }
          }
          if (sch) {
            shkoba2++;
            sch=false;
          }
          //holder.src=habet(fer8a);
          return;
        }
      }
  }
    for (let le = 2; le >= 0; le--) {
      if (kaf2[le].value != 0) {
        
        tawla[findPos()]=kaf2[le]
        kaf2[le]=fer8a;
        THabet();
        return;
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
            
            shkoba++;
            sch=false;
          }
          Reset();
          moves--;
          EN();    
          THabet();
        }
        if (moves < 1) {
          egri();
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
          EN();
        }

        Reset()
        Play();
    }
    let Score=0;
    let Score2=0;
  function ScoreFun() {
    
    let shkoba=0;
    let haya=false;
    let bermilla=0 ;
    let dineri=0;
    for (let c = 0; c < MeklaCounter; c++) {
      
      if (mekla[c].value==7) {
        bermilla++;
      }

      if (mekla[c].suit=="d") {
        dineri++;
        if (mekla[c].value == 7) {
          haya = true;
        }
      }       
    }

  if (MeklaCounter>20) {
    Score++;
  }

  if (bermilla>2) {
    Score++;
  }else if (bermilla < 2) {
    Score2++
  }

  if (haya) {
    Score++;
  }else{
    Score2++;
  }

  if (dineri > 5) {
    Score++;
  }else if (dineri < 2) {
    Score2++
  }

  Score+=shkoba;
  Score2+=shkoba2;
  
  
  
  
}

function egri() {
  if (cardindice+3<=cardnumber) {
    for (let i = 0; i <= 2 ; i++) {
      kaf1[i]=wii["cards"][i+cardindice]
      yedek1[i].src=habet(kaf1[i]);
    }  
    cardindice+=3;
    for (let i = 0; i <= 2 ; i++) {
      kaf2[i]=wii["cards"][i+cardindice]
    }  
    cardindice+=3;
  }
  else{
    wii.shuffle();
    ScoreFun();
    if (Score >= 11 || Score2 >= 11) {
       if (Score>Score2) {  
         
       }else{
         
       } 
    }else{
      dawr++;
      if (dawr % 2 == 0) {
        pop();
      }else{
        Tebda();
      }
    }

    
  }
}


 
//playing
let d=0;
let popup=document.querySelector(".popUP")
let popcard=document.querySelector(".Pcard")
pop();

function pop() {
  wii.shuffle();

  popcard.src=habet(wii["cards"][0])
  popup.style.visibility="visible";
  popup.style.opacity="1";
}

function kali(x) {
  d=x;
  popup.style.visibility="hidden";
  popup.style.opacity="0";
  Tebda();
}


function Tebda() {
    cardindice=4;
    kaf1[0]=wii["cards"][0]
    yedek1[0].src=habet(kaf1[0]);

    kaf1[0]=fer8a
    yedek1[0].src=habet(kaf1[0]);
    
    
    for (let i = 0; i < 4; i++) {
      tawla[i]=wii["cards"][i+d]
      places[i].src=habet(tawla[i]);
      tawla[i+4]=fer8a
    }
    
    if (kaf1[0].value=="7" && kaf1[0].suit=="d") {
      
      Score+=4;
    }
    
    
    egri()
    if (d == 1) {
      kaf1[0]=wii["cards"][0]
      yedek1[0].src=habet(kaf1[0]);
    }
    Reset();
    mekla=chye7;
    mekla2=chye7;
  }
    
    
    /*Tebda();*/
    THabet();
    
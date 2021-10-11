//inisialise
let card=window.document.querySelectorAll(".card");

class CardObject{
    constructor(value, type,CardPhoto) {
    this.Value=value;
    this.type=type;
    CardPhoto= value+this.type+".jpg";
    }
}

class cardHolder{
    Ocard;
    index=0;
    CardHolderHtml;
    
}


let cardHolders=[cardHolder];
let CardObjects=[CardObject];

for (let i = 0; i < card.length; i++) {
    cardHolders.push(new CardObject(1,"d","1d.jpg"))
}


for (let i = 0; i < cardHolder.length; i++) {
    cardHolders[i].CardHolderHtml=card[i];
}

//CardObjects[0]=new CardObject(1,"d","1d.jpg");
CardObjects[1]=new CardObject(2,"d","2d.jpg");
CardObjects[2]=new CardObject(3,"t","3t.jpg");


for (let i = 0; i < 4; i++) {
 /*   cardHolders[i]=new cardHolder(CardObjects[i],i,card[i])
    cardHolders[i].CardHolderHtml.src=cardHolders[i].Ocard.CardPhoto;*/
    alert(cardHolders[i].CardHolderHtml)
    alert(cardHolders[i].Ocard)
}
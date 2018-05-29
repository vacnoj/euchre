// array initiated that will hold an array of objects that make up a deck
var euchreDeck = {
}


// constructor that will make a card.
function Card(name, suit, value, image, played) {
    this.name = name;
    this.suit = suit;
    this.value = value;
    this.image = image;
    this.played = false;
}

//this function makes a deck of Euchre euchreDeck. It will interate through euchreDeck 9-ace in each suit and make
// them into an object. It will then add the object to an array
function makeDeck() {
    var count = 1;
    var name = ['9', '10', '11', '12', '13', '14'];
    var suit = ['c', 's', 'd', 'h'];
    for (var n  = 0; n < name.length; n++) {
        for(var s = 0; s < suit.length; s++) {
            var newCard = new Card(name[n], suit[s], parseInt(name[n]), `cardDeck/${name[n]}${suit[s]}.png`);      
            euchreDeck[count] = newCard;
            count++;
        }
    }
}

makeDeck();

console.log(euchreDeck);
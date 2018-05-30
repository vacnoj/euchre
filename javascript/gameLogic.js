// array initiated that will hold an array of objects that make up a deck
var euchreDeck = {
}

// create a variable for the trumpCard
var trumpCard;

// variable that holds trump value
var trump = {
}

// constructor that will make a card.
function Card(name, suit, value, image, played) {
    this.name = name;
    this.suit = suit;
    this.value = value;
    this.image = image;
    this.played = false;
}

//this function makes a deck of Euchre cards. It will interate 9-ace (ace = 14) in each suit and make
// them into an object. It will then add the object to an array euchreDeck.
function makeDeck() {
    var count = 0;
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

// calling the makeDeck function to make a deck.
makeDeck();


//make 4 players
function Player (playerName, playerId, card1, card2, card3, card4, card5) {
    this.playerName = playerName;
    this.playerId = playerId;
    this.card1 = card1;
    this.card2 = card2;
    this.card3 = card3;
    this.card4 = card4;
    this.card5 = card5;
}

var player1 = new Player("Jon", 1);
var player2 = new Player("Tim", 2);
var player3 = new Player("Patti", 3);
var player4 = new Player("Kristi", 4);

var players = [player1, player2, player3, player4];

// make a function that will deal out the cards; 5 for each of the 4 players
function dealCards() {
    
    //variable for the position in the deck that hasn't been picked
    var notPicked = [];
    for (let i = 0; i < 24;i++) {
        notPicked[i] = i;
    }


    for (let i = 0; i < 4; i++) { //4 players
        for (let k = 0; k < 5; k++) { // get 5 cards

            //pick a random number that is not higher than the number of cards not yet picked
            let randomNumber = Math.floor(Math.random()*notPicked.length);

            // switch statement so that each k(card) gets a card for each i(player)
            switch(k) {
                case 0:
                   players[i].card1 = euchreDeck[notPicked[randomNumber]];
                   break;
                case 1:
                    players[i].card2 = euchreDeck[notPicked[randomNumber]];
                    break;
                case 2:
                    players[i].card3 = euchreDeck[notPicked[randomNumber]];
                   break;
                case 3:
                    players[i].card4 = euchreDeck[notPicked[randomNumber]];
                   break;
                case 4:
                    players[i].card5 = euchreDeck[notPicked[randomNumber]];
                   break;
            }
            // after the card has been assigned, it is removed from the not picked array
            notPicked.splice(randomNumber, 1);
        }
    }
    // pick a number between 0-3 to randomly select what trump will be out of the remaining 4 cards.
    let randomNumber = Math.floor(Math.random()*4);
    
    // variable for the card flipped over that decides trump.
    trumpCard = euchreDeck[randomNumber];

    console.log(trumpCard);

}
dealCards(); // gives each player 5 cards


//console.log(players);





$(document).ready(function() {
    $("#player1").append(`<img src='${player1.card1.image}'></img>`);
    $("#player1").append(`<img src='${player1.card2.image}'></img>`);
    $("#player1").append(`<img src='${player1.card3.image}'></img>`);
    $("#player1").append(`<img src='${player1.card4.image}'></img>`);
    $("#player1").append(`<img src='${player1.card5.image}'></img>`);

    $("#player2").append(`<img src='${player2.card1.image}'></img>`);
    $("#player2").append(`<img src='${player2.card3.image}'></img>`);
    $("#player2").append(`<img src='${player2.card2.image}'></img>`);
    $("#player2").append(`<img src='${player2.card4.image}'></img>`);
    $("#player2").append(`<img src='${player2.card5.image}'></img>`);

    $("#player3").append(`<img src='${player3.card1.image}'></img>`);
    $("#player3").append(`<img src='${player3.card2.image}'></img>`);
    $("#player3").append(`<img src='${player3.card3.image}'></img>`);
    $("#player3").append(`<img src='${player3.card4.image}'></img>`);
    $("#player3").append(`<img src='${player3.card5.image}'></img>`);

    $("#player4").append(`<img src='${player4.card1.image}'></img>`);
    $("#player4").append(`<img src='${player4.card2.image}'></img>`);
    $("#player4").append(`<img src='${player4.card3.image}'></img>`);
    $("#player4").append(`<img src='${player4.card4.image}'></img>`);
    $("#player4").append(`<img src='${player4.card5.image}'></img>`);
    
    $("#deck").append(`<img src='${trumpCard.image}'></img>`);

    switch (trumpCard.suit) {
        case 's':
            if(confirm(`Would you like to make shovels trump?`)) {
                trump = 'shovels';
            }
            break;
        
        case 'c':
            if(confirm(`Would you like to make clovers trump?`)) {
                trump = 'clovers';
            }
            break;
        
        case 'h':
            if(confirm(`Would you like to make hearts trump?`)) {
                trump.suit = 'h';
                trump.image = "images/heart.ico"
            }
            break;
        
        case 'd':
            if(confirm(`Would you like to make diamonds trump?`)) {
                trump = 'diamonds';
            }
            break;
        
    }

    $('#trump').append(`<img src='${trump.image}'></img>`);
    
});

//socket.io

// Global Variables ==========================================================================
// array initiated that will hold an array of objects that make up a deck
var euchreDeck = {
}

//creates a blank card
var blankCard = new Card("blank", "null", "null", 'cardDeck/blank.png', "null", false);
// array that will store the players
var players;
var player1, player2, player3, player4;

// create a variable for the trumpCard
var trumpCard;

// variable that holds trump value
var trump = {
    color: undefined,
    suit: undefined,
    image: undefined
}

// variable that will decide if this is the first hand
var firstHand = true;
var dealerCounter, dealerIterator;

// constructor that will make a card.
function Card(name, suit, value, image, color, played) {
    this.name = name;
    this.suit = suit;
    this.value = value;
    this.image = image;
    this.color = color;
    this.played = false;
}

//initialize firebase

var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyDn-qoSGYwgoHaraZPyQ-WAEcDeQVJ7VQM",
    authDomain: "euchre-jktp.firebaseapp.com",
    databaseURL: "https://euchre-jktp.firebaseio.com",
    projectId: "euchre-jktp",
    storageBucket: "euchre-jktp.appspot.com",
    messagingSenderId: "232950785594"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

// ===========================================================================================

//this function makes a deck of Euchre cards. It will interate 9-ace (ace = 14) in each suit and make
// them into an object. It will then add the object to an array euchreDeck.
function makeDeck() {
    var count = 0;
    var name = ['9', '10', '11', '12', '13', '14'];
    var suit = ['c', 's', 'd', 'h'];
    for (var n  = 0; n < name.length; n++) {
        for(var s = 0; s < suit.length; s++) {
            var newCard = new Card(name[n], suit[s], parseInt(name[n], 10), `cardDeck/${name[n]}${suit[s]}.png`); 
            if (suit[s] === 'c' || suit[s] === 's') {
                newCard.color = "black";
            } else newCard.color = "red";
            euchreDeck[count] = newCard;
            count++;
        }
    }
}

//make 4 players
function makePlayers() {
    function Player (playerName, playerId, card1, card2, card3, card4, card5, isDealer) {
        this.playerName = playerName;
        this.playerId = playerId;
        this.card1 = card1;
        this.card2 = card2;
        this.card3 = card3;
        this.card4 = card4;
        this.card5 = card5;
        this.isDealer = false;
        this.isPickingTrump = false;
    }

    player1 = new Player("Patti", 1, null, null, null, null, null);
    player2 = new Player("Tim", 2, null, null, null, null, null);
    player3 = new Player("Kristi", 3, null, null, null, null, null);
    player4 = new Player("Jon", 4, null, null, null, null, null);

    players = [player1, player2, player3, player4];

}

// function that will create a dealer and rotate who is dealer
function selectDealer() {
    
    if (firstHand) {
        //pick a random number between 1 and 4 to decide which index will start as dealer
        dealerIterator = Math.floor(Math.random()*4);
        // the dealerCounter is equal to the remainder of iterator / 4 so that it will repeat
        // between 0-3 which are the indexes of the 4 players
        dealerCounter = dealerIterator % 4;
        // this sets the player at the index that was selected as the dealer
        players[dealerCounter].isDealer = true;
        // this sets the player left of dealer to pick trump first
        players[(dealerIterator+1) % 4].isPickingTrump = true;
        // this sets the firstHand variable to false so that a new dealer isnt selected out of order. 
        firstHand = false;
    } else {
        dealerIterator++;
        players[dealerCounter].isDealer = false;
        dealerCounter = dealerIterator % 4;
        players[dealerCounter].isDealer = true;
        players[(dealerIterator+1) % 4].isPickingTrump = true;
    }    
}

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
                default: console.log("error with dealCards() @ Line 92 gameLogic.js");
            }
            // after the card has been assigned, it is removed from the not picked array
            notPicked.splice(randomNumber, 1);
        }
    }
    // pick a number between 0-3 to randomly select what trump will be out of the remaining 4 cards.
    let randomNumber = Math.floor(Math.random()*4);

    // variable for the card flipped over that decides trump.
    trumpCard = euchreDeck[notPicked[randomNumber]];

    // console.log(trumpCard);

}


// prompt users to decide if they want trumpCard to be trump
// ===============================================Still working below =============================
function setTrump() {

    // if (trumpCard is picked as suit) {
        trump.suit = trumpCard.suit;
        trump.color = trumpCard.color;
        // code that sets it equal to an icon
        switch (trumpCard.suit) {
            case 's':
                trump.image = "images/spade.ico"
                break;
            
            case 'c':
                trump.image = "images/club.ico"
                break;
            
            case 'h':
                trump.image = "images/heart.ico"
                break;
            
            case 'd':
                trump.image = "images/diamond.ico"
                break;
            default: console.log("error with setTrump() @ Line 143 gameLogic.js");
        }
    // } else {
        // prompt to pick what trump is based on the other 3 being available
    // }
console.log("Trump is: ", trump);

// ====================================Still working above ===========================================

    //This block of code will print out all the trump cards that are dealt for testing purposes
    for(let i = 0; i < players.length; i++) {
    
        if (players[i].card1.suit === trump.suit) {
            console.log(players[i].card1);
            
        }
        if (players[i].card2.suit === trump.suit) {
            console.log(players[i].card2);
            
        }
        if (players[i].card3.suit === trump.suit) {
            console.log(players[i].card3);
            
        }
        if (players[i].card4.suit === trump.suit) {
            console.log(players[i].card4);
            
        }
        if (players[i].card5.suit === trump.suit) {
            console.log(players[i].card5);
            
        }

        if (players[i].card1.color === trump.color && players[i].card1.name === "11" && players[i].card1.suit !== trump.suit) {
                console.log(players[i].card1);
            
        }
        if (players[i].card2.color === trump.color && players[i].card2.name === "11" && players[i].card2.suit !== trump.suit) {
                console.log(players[i].card2);
            
        }
        if (players[i].card3.color === trump.color && players[i].card3.name === "11" && players[i].card3.suit !== trump.suit) {
                console.log(players[i].card3);
            
        }
        if (players[i].card4.color === trump.color && players[i].card4.name === "11" && players[i].card4.suit !== trump.suit) {
                console.log(players[i].card4);
            
        }
        if (players[i].card5.color === trump.color && players[i].card5.name === "11" && players[i].card5.suit !== trump.suit) {
                console.log(players[i].card5);
            
        }
    }   

    //=========================================================================================================================
}

function sendPlayersToDB(player1, player2, player3, player4) {
    database.ref('players/').set({
        player1: player1,
        player2: player2,
        player3: player3,
        player4: player4
    });
}

function sendCardsToDB() {
    database.ref('players/').child('player1').update({
        card1: player1.card1,
        card2: player1.card2,
        card3: player1.card3,
        card4: player1.card4,
        card5: player1.card5
    });
    database.ref('players/').child('player2').update({
        card1: player2.card1,
        card2: player2.card2,
        card3: player2.card3,
        card4: player2.card4,
        card5: player2.card5
    });
    database.ref('players/').child('player3').update({
        card1: player3.card1,
        card2: player3.card2,
        card3: player3.card3,
        card4: player3.card4,
        card5: player3.card5
    });
    database.ref('players/').child('player4').update({
        card1: player4.card1,
        card2: player4.card2,
        card3: player4.card3,
        card4: player4.card4,
        card5: player4.card5
    });
}

function sendTrumpCardToDB() {
    database.ref('trump/').set({
        trumpCard: trumpCard
    });
}

// function roundOne() {

// }

function beforeGame() {
    makeDeck();
    makePlayers();
    selectDealer();
    sendPlayersToDB(player1, player2, player3, player4);
}
function beginGame() {
    dealCards();
    sendTrumpCardToDB();
    // setTrump();
    sendCardsToDB();
    console.log("The game has begun!");
}


beforeGame();
beginGame();

/*
makeDeck(); //creates the cards 9-ace in every suit

makePlayers();//uses a constructor function to create 4 players

selectDealer(); // uses some calculations to rotate between 4 different dealers starting with a rando

dealCards(); // gives each player 5 cards

setTrump(); //prompts the players to decide if they want trumpCard to be trump or they want to pick
console.log(players);

sendPlayersToDB(player1, player2, player3, player4); // this passes in the 4 players created and sends them to firebase

sendTrumpCardToDB(); // this will send the trump card in question to firebase
    
sendCardsToDB(); // this will send the cards to the players in the database


*/


export {player1, player2, player3, player4, trumpCard, firebase, database, blankCard, beginGame};
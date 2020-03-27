import React, { Component } from 'react';
import ShengJiDeck from "./Deck";
import Hand from "./Hand";

class ShengJiGame extends Component{
	constructor(props){
    super(props);
    this.state = {
      Deck: new ShengJiDeck(),
      Players: [],
      DiPai: [],
      Points: 0,
      TrumpCard: new Array(2),
      TrumpSuit: '',
      playedCards: []
    };
    this.createPlayers = this.createPlayers.bind(this);
    this.startGame = this.startGame.bind(this);
    this.dealCards.bind(this);
    this.sortHands.bind(this);
    this.quickSort.bind(this);
    this.updatePlayedCards = this.updatePlayedCards.bind(this);
  }
  createPlayers(){
    for (let i=1; i<5; i++){
      let hand = [];
      let player = { Name: 'Player ' + i, ID: i, Hand: hand};
      this.state.Players.push(player);
    }
  };

  dealCards(){
    let deck = this.state.Deck.cards;
    let players = this.state.Players;
    let diPai = this.state.DiPai;
    for (let i=0; i < 25; i++){
      for (let j=0; j < 4; j++){
        let card = deck.pop();
        card.player=j;
        players[j].Hand.push(card);
      }
    }
    for (let i=0; i<8; i++)
    {
      let c = deck.pop();
      diPai.push(c);
    }
    this.sortHands();
  };

  sortHands(){
    let players = this.state.Players
    for (let i=0; i<4; i++){
      let hand = players[i].Hand;
      let clubs = [];
      let diamonds = [];
      let hearts = [];
      let spades = [];
      let trumps = [];
      for (let j=0; j<25; j++){
        let card = hand.pop();
        if (card.trump===true){ trumps.push(card) }
        if (card.suit==="c"){ clubs.push(card) }
        if (card.suit==="d"){ diamonds.push(card) }
        if (card.suit==="h"){ hearts.push(card) }
        if (card.suit==="s"){ spades.push(card) }
      }
      clubs = this.quickSort(clubs);
      diamonds = this.quickSort(diamonds);
      hearts = this.quickSort(hearts);
      spades = this.quickSort(spades);
      trumps = this.quickSort(trumps)
      let newHand = [];
      for (let a=0; a<clubs.length; a++){newHand.push(clubs[a])}
      for (let b=0; b<diamonds.length; b++){newHand.push(diamonds[b])}
      for (let c=0; c<hearts.length; c++){newHand.push(hearts[c])}
      for (let d=0; d<spades.length; d++){newHand.push(spades[d])}
      for (let e=0; e<trumps.length; e++){newHand.push(trumps[e])}  
      players[i].Hand = newHand;
    }
  }

  quickSort(arr){
    if (arr.length <=1) {return arr}
    else{
      let left = [];
      let right = [];
      let newArray = [];
      let pivotCard = arr.pop();
      let pivot = pivotCard.value;
      for (let i=0; i<arr.length; i++){
        if (arr[i].value <= pivot){
          left.push(arr[i])
        }
        else{
          right.push(arr[i])
        }
      }
      return newArray.concat(this.quickSort(left), pivotCard, this.quickSort(right));
    }
  }

  updatePlayedCards(cards){
    let playedCards = this.state.playedCards;
    for (let i=0; i<cards.length; i++){
      playedCards.push(cards[i]);
      this.removeCardFromHand(cards[i]);
    }
    console.log(this.state.playedCards);
  }

  removeCardFromHand(card){
    let player = card.player
    let hand = this.state.Players[player].Hand
    for (let i=0; i<hand.length; i++){
      if (hand[i]===card){
        hand.splice(i,1)
      }
    }
  }

  startGame(){
    this.state.Deck.shuffle();
    this.createPlayers();
    this.dealCards();
    this.forceUpdate();
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  render() {
    console.log(this.state.Deck);
    console.log(this.state.Players);
    console.log(this.state.DiPai);
    const renderHands = () =>{
      if(this.state.Players.length>0){
        return <Hand playerHand = {this.state.Players[0].Hand} updatePlayedCards={this.updatePlayedCards} />
      }
    }
    return(
      <div>
        <button onClick={this.startGame}>Start Game</button>
        {renderHands()}
      </div>
      
    ) 
	}
}

export default ShengJiGame;
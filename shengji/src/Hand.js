import React, { Component } from 'react';
import PlayingCard from "./PlayingCard.js";
import './Hand.css';

class Hand extends Component{
	constructor(props){
		super(props);
		this.state = {
			SelectedCards: [],
		}
		this.selectCard = this.selectCard.bind(this);
		this.playCards = this.playCards.bind(this);
		this.clearSelectedCards.bind(this);
	}

	selectCard(card){
		let selectedCards = this.state.SelectedCards
		let duplicate = false;
		for (let i=0; i<selectedCards.length; i++)
		{
			if (selectedCards[i] === card){
				selectedCards.splice(i,1)
				duplicate=true;
			}
		}
		if (duplicate===false){
			selectedCards.push(card);			
		}
		console.log(this.state)
	}

	playCards(){
		console.log(this.props)
		this.props.updatePlayedCards(this.state.SelectedCards);
		this.clearSelectedCards();
	}

	clearSelectedCards(){
		this.setState({SelectedCards: []})
	}

	render(){
		console.log(this.props)
		return (
		<div>
			<div className="hand hhand-compact">
				{this.props.playerHand.map((card, index) =>(
					<PlayingCard cardValue={card} selectCard={this.selectCard}/>
					)
				)}
			</div>
			<button onClick={this.playCards}>Play</button>
		</div>
		)
	}	
}
export default Hand
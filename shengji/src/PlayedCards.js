import React, { Component } from 'react';
import PlayingCard from "./PlayingCard.js";

class PlayedCards extends Component{
	render(){
		return (
		<div>
			<div className="hand hhand-compact">
				{this.props.cards.map((card, index) =>(
					<PlayingCard cardValue={card} />
					)
				)}
			</div>
		</div>
		)
	}
}

export default PlayedCards
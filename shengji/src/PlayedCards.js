import React, { Component } from 'react';
import PlayedCard from "./PlayedCard.js";

class PlayedCards extends Component{
	render(){
		return (
		<div>
			<div className="hand hhand-compact">
				{this.props.cards.map((card, index) =>(
					<PlayedCard cardValue={card} />
					)
				)}
			</div>
		</div>
		)
	}
}

export default PlayedCards
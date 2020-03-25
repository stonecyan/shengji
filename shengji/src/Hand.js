import React from "react";
import PlayingCard from "./PlayingCard.js";
import './Hand.css';

const Hand = props => {
	return (
		<div className="hand hhand-compact">
			{props.playerHand.map((card, index) =>(
				<PlayingCard cardValue={card}/>
				)
			)}
		</div>
	);
};

export default Hand
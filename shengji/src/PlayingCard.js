import React from "react"

function playCard(card){
		console.log(card);
};

const PlayingCard = props => {
	var cardValue = String(props.cardValue.value)+props.cardValue.suit;
	return (
		<div className="card" onClick={() => {playCard(cardValue)}}>
			<img className="card" src={require('./cards/'+cardValue+'.png')}/>
		</div>
	)
}

export default PlayingCard
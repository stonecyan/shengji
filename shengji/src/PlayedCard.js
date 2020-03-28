import React from 'react';

const PlayingCard = props => {
	var cardValue = String(props.cardValue.value)+props.cardValue.suit;
	return (
		<div className="card">
			<img className="card" src={require('./cards/'+cardValue+'.png')}/>
		</div>
	)
}

export default PlayingCard
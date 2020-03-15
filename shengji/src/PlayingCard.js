import React from "react"

const PlayingCard = props => {
	var cardValue = String(props.cardValue.value)+props.cardValue.suit;
	return (
		<img className="card" src={require('./cards/'+cardValue+'.png')} />
	)
}

export default PlayingCard
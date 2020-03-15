export default class ShengJiDeck{
	constructor(){
        this.cards = this.initDeck();
    }
    initDeck(){
    	let deck = [];
		let suits = ['c','d','h','s'];
		let smallJoker = {value:20, suit: 't', point: false, trump: true};
		let bigJoker = {value:25, suit: 't', point: false, trump: true};
		var s;
		var c;
		for (s=0; s<suits.length; s++){
			c=0;
			for (c=2; c<15; c++){
				var card = {value: c, suit: suits[s], point: false, trump: false};
				if (c===5 || c===10 || c===13)
				card.point = true;
				deck.push(card);
				deck.push(card);
			}
			
		}
		var i;
		for (i=0; i<2; i++){
			deck.push(smallJoker);
			deck.push(bigJoker);
		}
		return deck;
    }
    shuffle(){
    	function shuffle(d){
	    	for(let i=d.length-1; i>0; i--){
	    		const j = Math.floor(Math.random()*(i+1));
	    		[d[i], d[j]] = [d[j], d[i]];
	    	}
	    	return d;
    	}
    	this.cards = shuffle(this.cards);
    }
}

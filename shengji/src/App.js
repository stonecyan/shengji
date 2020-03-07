import ShengJiDeck from "./Deck";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Deck: new ShengJiDeck(),
      Players: new Array(),
      DiPai: new Array(8),
      Points: 0,
      TrumpCard: new Array(2),
      TrumpSuit: ''
    };
    this.createPlayers.bind(this);
    this.dealCards.bind(this);
  }
  createPlayers(){
    for (let i=1; i<5; i++){
      let hand = new Array();
      let player = { Name: 'Player ' + i, ID: i, Hand: hand};
      this.state.Players.push(player);
    }
  };

  dealCards(){
    let deck = this.state.Deck.cards
    let players = this.state.Players
    for (let i=0; i < 25; i++){
      for (let j=0; j < 4; j++){
        let card = deck.pop();
        players[j].Hand.push(card);
      }
    }
  };

  render() {
    this.state.Deck.shuffle();
    this.createPlayers();
    this.dealCards();
    console.log(this.state.Deck);
    console.log(this.state.Players);
    return (
      <div>
        <h1>Sheng Ji</h1>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
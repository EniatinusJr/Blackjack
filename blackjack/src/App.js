import './App.css';
import {Component} from "react";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Game states
            gameStarted: false,
            playerPlaying: false,
            deckId: '',
            dealerHand: [],
            dealerScore: 0,
            dealerInitialScore: 0,
            dealerHasAce: false,
            dealerHasBlackjack: false,
            dealerSoft: false,
            insurance: false,
            playerHand: [],
            playerScore: 0,
            playerHasAce: false,
            playerHasBlackjack: false,
            playerSplittable: false,
            playerWins: 0,
            dealerWins: 0,
            pushes: 0,
            playerBlackjacks: 0,
            dealerBlackjacks: 0,
            playerBusts: 0,
            dealerBusts: 0,
            gameMessage: '',
        };
    }

    componentDidMount() {
        fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    deckId: json.deck_id,
                });
            });
    }

    handleEndGame() {
        fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    deckId: json.deck_id,
                });
            });
        this.setState({
            gameStarted: false,
            playerPlaying: false,
            dealerHand: [],
            dealerScore: 0,
            dealerInitialScore: 0,
            dealerHasAce: false,
            dealerHasBlackjack: false,
            dealerSoft: false,
            insurance: false,
            playerHand: [],
            playerScore: 0,
            playerHasAce: false,
            playerHasBlackjack: false,
            playerSplittable: false,
            // Game Statistics
            playerWins: 0,
            dealerWins: 0,
            pushes: 0,
            playerBlackjacks: 0,
            dealerBlackjacks: 0,
            playerBusts: 0,
            dealerBusts: 0,
            gameMessage: '',
            // Betting options and flags
            initialBuy: 0,
            playerChips: 0,
            betAmount: 0,
            chipsInPlay: 0,
            winAmount: 0,
        });
    }



    /*
    return (
        <div className="App">
            <header className="App-header">
                <div class="center">
                    <div class="cards_player">
                        <h1>Blackjack - simplified</h1>
                        <img id="card1" src="" value="" alt="first card"/>
                        <img id="card2" src="" value="" alt="second card"/>
                        <img id="card3" src="" value="" alt="third card"/>
                        <img id="card4" src="" value="" alt="fourth card"/>
                        <img id="card5" src="" value="" alt="fifth card"/>
                        <p id="card1t" class="total"></p>
                        <p id="card2t" class="total"></p>
                        <p id="card3t" class="total"></p>
                        <p id="card4t" class="total"></p>
                        <p id="card5t" class="total"></p>
                        <p id="card_total" class="total"></p>
                        <button type="button" id="newcard" class="button">Click here for 3rd card</button>
                        <button type="button" id="4thcard" class="button">Click here for 4th card</button>
                        <button type="button" id="5thcard" class="button">Click here for 5th card</button>
                        <button type="button" id="finish" class="button">Click for no more cards</button>
                    </div>
                </div>
                <div class="center">
                    <div class="cards_dealer">
                        <div class="center"><p class="title_dealer">Dealer</p></div>
                        <div id="dealercards">

                        </div>
                        <p id="card1dt"></p>
                        <p id="win" class="result_dealer"></p>
                        <p id="dealer_total" class="result_dealer"></p>
                        <p id="win_dealer" class="result_dealer"></p>
                    </div>
                </div>
                <p id="card3a"></p>
            </header>
        </div>
    );*/
}


import './App.css';
import {useEffect, useState} from "react";
import getCard from "./ApiCall";

function App() {

    const [deckID, setDeckID] = useState([]);

    const [card, setCard] = useState();
    const [value, setValue] = useState(0);
    const [image, setImage] = useState("");




    useEffect( () => {
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then(response => response.json())
            .then(data => setDeckID(data.deck_id))
            .catch((error) => {
                console.error('Error:', error);
            });

        console.log(deckID);
    }, [] );

    useEffect( () => {
        if (deckID != null) {
            getCard(deckID, setValue, setImage);
        }
    }, [deckID] );




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
    );
}

export default App;

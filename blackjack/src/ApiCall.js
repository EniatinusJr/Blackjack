export default function getCard(deck_id, setValue, setImage) {
    fetch('https://deckofcardsapi.com/api/' + deck_id + '/new/draw/?count=1')
        .then(response => response.json())
        .then(data => {
            setValue(data.cards[0].value);
            setImage(data.cards[0].image);
            console.log(data.cards[0].value);
            console.log(data.cards[0].image);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


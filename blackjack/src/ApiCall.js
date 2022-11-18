import {useEffect, useState} from "react";

function ApiCall() {
    useEffect(() => {
        callDeck();

    }, []);

    const [Value, setValue] = useState(0);
    const [Image, setImage] = useState("")

    const callDeck = () => {
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setValue(data.value);
                console.log(Value);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


}

export default ApiCall;
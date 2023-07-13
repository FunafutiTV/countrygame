import { useState, useEffect } from 'react';
import countrylist from '../public/countrylist.js';

export default function Prompt({ country, language, isMidnight, win, setWin }) {
    let [input, setInput] = useState("");

    useEffect(() => {
        if (country) {
            countrylist[country].names.guesses.map((name) => {
                if (input.toLowerCase().includes(name)) {
                    setWin(true);
                }
            })
        }
    }, [input]) // Whenever the input changes, check if it includes the name of the country and set win to true if it does

    useEffect(() => {
        if (isMidnight) {
            setWin(false);
            setInput("");
        }
    }, [isMidnight]) // Everyday at midnight (Paris time), a trigged will be activated in MongoDB that will change the country to find as well as the hints, and it will be displayed directly to the user. To accompany this, we set win to false and clear the input

    return (
        <div className="prompt">
            {win ? (language === "fr") ? <p>
                <strong>Félicitations ! Ce presque-pays est bien {countrylist[country].names.fr}. Revenez demain pour un nouveau pays !</strong>
            </p> : <p>
                <strong>Congratulations ! This almost country is indeed {countrylist[country].names.en}. Comeback tomorrow for a new country !</strong>
            </p>
            : <>
                <input value={input} placeholder={(language === "fr") ? "Entrez votre réponse" : "Enter your guess"} onChange={(evt) => setInput(evt.target.value)} type="text"/>
            </>}
        </div> // If win is true, a message indicates that the user has won. If not, a prompt will be displayed to guess the country
    )
}
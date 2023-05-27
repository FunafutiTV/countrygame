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
    }, [input])

    useEffect(() => {
        if (isMidnight) {
            setWin(false);
            setInput("");
        }
    }, [isMidnight])

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
        </div>
    )
}
import { useState, useEffect } from 'react';
import countrylist from '../public/countrylist.js';

export default function Prompt({ country, language, isMidnight }) {
    let [input, setInput] = useState("");
    let [win, setWin] = useState(false);

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
                Félicitations ! Ce presque-pays est bien {countrylist[country].names.fr}
            </p> : <p>
                Congratulations ! This almost country is indeed {countrylist[country].names.en}
            </p>
            : <>
                <input value={input} onChange={(evt) => setInput(evt.target.value)} type="text"/>
            </>}
        </div>
    )
}
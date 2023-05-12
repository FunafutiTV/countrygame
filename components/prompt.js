import { useState } from 'react';

export default function Prompt({ setPseudo, timerZero }) {
    let [input, setInput] = useState("");

    function handleClick() {
        const regex = /^[a-zA-Z0-9_@ -]+$/;
        if (input.length > 20 || input.length < 2) {
            alert("Le pseudo doit contenir entre 2 et 20 caractères")
        } else if (!regex.test(input)) {
            alert("Le pseudo contient des caractères invalides")
        } else {
        setPseudo(input);
        setInput("");
        }
    }

    return (
        <div>{timerZero ? <>
            <input value={input} onChange={(evt) => setInput(evt.target.value)} type="text"/>
            <button onClick={handleClick}>Sauvegarder</button>
            <p>Satisfait de votre score ? Entrez votre pseudo pour le sauvegarder dans le classement.</p>
            </> : null }
        </div>
    )
}
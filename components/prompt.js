import { useState } from 'react';

export default function Prompt({ setPseudo }) {
    let [input, setInput] = useState("");

    function handleClick() {
        setPseudo(input);
        setInput("");
    }

    return (
        <div>
            <input value={input} onChange={(evt) => setInput(evt.target.value)} type="text"/>
            <button onClick={handleClick}>Soumettre</button>
        </div>
    )
}
import { useState, useEffect } from 'react';

export default function ClickZone({ timerZero, setFirstClick, setNbClicks }) {
    let [clicks, setClicks] = useState(0);

    function zoneClicked() {
        setFirstClick(true);
        if (!timerZero) {
            setClicks(clicks + 1);
        }
    }

    useEffect(() => {
        if (timerZero) { 
            setNbClicks(clicks)
        } else {
            setNbClicks(null);
            setClicks(0);
        }
    }, [timerZero])

    return (
        <>
            <p className={clicks ? "rules-out" : "rules"}>Vous avez 15 secondes pour cliquer le plus de fois possibles dans la zone ci-dessous. Le timer se lance dès votre premier clic.</p>
            <div className={timerZero ? "click-zone-blocked" : "click-zone"} onClick={zoneClicked}>{`${clicks} clic${clicks > 1 ? "s" : ""}`}</div>
        </>
    )
}
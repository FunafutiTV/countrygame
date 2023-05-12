import { useEffect, useState } from 'react';

export default function DisplayCPS({ clicks, setRefresh }) {
    let [CPS, setCPS] = useState(null)

    useEffect(() => {
        clicks ? setCPS(<p>Vous cliquez à une vitesse de <strong>{Math.round(clicks*100/15)/100} CPS.</strong></p>) : setCPS(null)
    }, [clicks])

    function handleRefreshClick() {
        setRefresh(true);
    }
    return (
        <section>
            <div>{CPS}</div>
            <div>{CPS ? <button onClick={handleRefreshClick}>Recommencer</button> : null}</div>
        </section>
    )
}
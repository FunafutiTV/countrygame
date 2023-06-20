import { useState, useEffect } from 'react';
import Flag from 'components/flag.js'
import Population from 'components/population.js'
import Location from 'components/location.js'
import Capital from 'components/capital.js'
import Shape from 'components/shape.js'
import Claimed from 'components/claimed.js'

export default function Hints({ country, setCountry, language, midnight, isMidnight, setIsMidnight, win }) {
    let [fetchedList, setFetchedList] = useState(undefined);
    let [hints, setHints] = useState(1);

    function handleNextHint() {
        setHints(hints + 1);
    }

  function displayComponents(baseArray) {
    let shuffledArray = baseArray.sort((a, b) => {
        const indexA = fetchedList.indexOf(baseArray.indexOf(a));
        const indexB = fetchedList.indexOf(baseArray.indexOf(b));
        return indexA - indexB;
    });
    return shuffledArray.slice(0,hints);
  }

  useEffect(() => {
    const fetchData = async () => {
        const results = await fetch("/api/get");
        const JSONresults = await results.json();
        setFetchedList(JSONresults.array);
        setCountry(JSONresults.country);
        }
    fetchData().catch(console.error);
    if (isMidnight) {
        setHints(1);
        setIsMidnight(false);
    }
  }, [midnight])

  if (!fetchedList) {
    return (<span className="loader"></span>)
  }

  return (
    <>
    {(hints < 6) ? <button className={win ? "hidden-hints" : "hints-left"} onClick={handleNextHint}><span>{(language === "fr") ? `Il reste ${6 - hints} indice${(hints === 5) ? "" : "s"}. Afficher le suivant` : `${6 - hints} hint${(hints === 5) ? "" : "s"} left. Show the next one`}</span></button> : null}
    <ul id="hints-list">
        {displayComponents([<Flag country={country} language={language}/>,<Population country={country} language={language}/>,
                <Location country={country} language={language}/>,<Capital country={country} language={language}/>,
                <Shape country={country} language={language}/>,<Claimed country={country} language={language}/>])
                .map((component, key) => {return <li key={key}>{component}</li>})}
    </ul>
    </>
  )
}
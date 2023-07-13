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
    } // Increment hints by one when the user clicks the button

  function displayComponents(baseArray) {
    let shuffledArray = baseArray.sort((a, b) => {
        const indexA = fetchedList.indexOf(baseArray.indexOf(a));
        const indexB = fetchedList.indexOf(baseArray.indexOf(b));
        return indexA - indexB;
    });
    return shuffledArray.slice(0,hints);
  } // Display the hints components in the order given by the array from MongoDB

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
  }, [midnight]) // If the page loads for the first time or it is midnight, fetch the country to find and the array which gives the order of the hints. If isMidnight is true, set hints to one to only show the first hint and set isMidnight to false

  if (!fetchedList) {
    return (<span className="loader"></span>)
  } // Display a loader if the fetching isn't over yet

  return (
    <>
    {(hints < 6) ? <button className={win ? "hidden-hints" : "hints-left"} onClick={handleNextHint}><span>{(language === "fr") ? `Il reste ${6 - hints} indice${(hints === 5) ? "" : "s"}. Afficher le suivant` : `${6 - hints} hint${(hints === 5) ? "" : "s"} left. Show the next one`}</span></button> : null} {/* Hide the button when there is no hint left to show */}
    <ul id="hints-list">
        {displayComponents([<Flag country={country} language={language}/>,<Population country={country} language={language}/>,
                <Location country={country} language={language}/>,<Capital country={country} language={language}/>,
                <Shape country={country} language={language}/>,<Claimed country={country} language={language}/>])
                .map((component, key) => {return <li key={key}>{component}</li>})}
    </ul>
    </>
  )
}
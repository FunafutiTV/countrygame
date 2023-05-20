import Head from 'next/head'
import schedule, { Job } from 'node-schedule'
import { useEffect, useState } from 'react'
import Flag from 'components/flag.js'
import Population from 'components/population.js'
import Location from 'components/location.js'
import Capital from 'components/capital.js'
import Shape from 'components/shape.js'
import Claimed from 'components/claimed.js'

  
export default function Home() {
  let country = "Somaliland";
  let [language, setLanguage] = useState("en");
  let [componentArray, setComponentArray] = useState(undefined);
  let baseArray = [<Flag country={country} language={language}/>,<Population country={country} language={language}/>,
        <Location country={country} language={language}/>,<Capital country={country} language={language}/>,
        <Shape country={country} language={language}/>,<Claimed country={country} language={language}/>];

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetch("/api/get");
      const JSONresults = await results.json();
      let shuffledArray = baseArray;
      console.log(JSONresults.array)
      shuffledArray = shuffledArray.sort((a, b) => {
        const indexA = JSONresults.array.indexOf(baseArray.indexOf(a));
        const indexB = JSONresults.array.indexOf(baseArray.indexOf(b));
        return indexA - indexB;
      });
      setComponentArray(shuffledArray);
    }
    fetchData().catch(console.error);
  }, [])
// need to set up a cron job to force refresh of the page at midnight
  if (!componentArray) {
    return (<h1>Chargement...</h1>)
  }

  return (
    <main>
      <ul>
        {componentArray.map((component, key) => {return <li key={key}>{component}</li>})} 
      </ul>
    </main>
  )
}
/* import '../styles/globals.css' */
import '../styles/normalize.css'
import schedule, { Job } from 'node-schedule'
import { useEffect, useState } from 'react'
import Flag from 'components/flag.js'
import Population from 'components/population.js'
import Location from 'components/location.js'
import Capital from 'components/capital.js'
import Shape from 'components/shape.js'
import Claimed from 'components/claimed.js'

export default function App({ Component, pageProps }) {
  let country = "Somaliland";
  let [language, setLanguage] = useState("en");
  let componentArray = ["<Flag country={country} language={language}/>","<Population country={country} language={language}/>",
        "<Location country={country} language={language}/>","<Capital country={country} language={language}/>",
        "<Shape country={country} language={language}/>","<Claimed country={country} language={language}/>"]

  useEffect(() => {
    const job = schedule.scheduleJob('* * * * *', () => {
      componentArray = componentArray.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
      console.log(componentArray)
      const response = fetch('/api/post', {
        method: 'POST',
        body: componentArray,
      })

    });
    return () => {
      job.cancel();
    };
  }, [])
  return <Component {...pageProps} componentArray={componentArray} />
}

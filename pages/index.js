import Head from 'next/head'
import schedule, { Job } from 'node-schedule'
import { useEffect, useState } from 'react'
import Hints from 'components/hints.js'
import Prompt from 'components/prompt.js'
import LanguagePicker from 'components/languagepicker.js'
  
export default function Home() {
  let [country, setCountry] = useState(undefined);
  let [language, setLanguage] = useState("en");
  let [midnight, setMidnight] = useState(0);
  let [isMidnight, setIsMidnight] = useState(false);
  let [win, setWin] = useState(false);
        
  const job = schedule.scheduleJob('0 22 * * *', function() {
    setIsMidnight(true);
    setMidnight(midnight + 1);
  })

  return (
    <main>
      <LanguagePicker language={language} setLanguage={setLanguage}/>
      <header>
        <h1>{(language === "fr") ? 'Devinez le "presque-pays"' : 'Guess the "almost country"'}</h1>
        <p>{(language === "fr") ? 'Chaque jour, un nouveau "presque-pays" est à deviner en utilisant les indices ci-dessous. La liste des "presque-pays" inclue les pays indépendants mais non-reconnus ou ne siégeant pas à l\'ONU, ainsi que des territoires appartenant à d\' autres pays mais bénéficiant d\'une certaine autonomie. Essayez de le trouver en utilisant le moins d\'indices possible !' : 'Everyday, there is a new "almost country" to guess using the hints below. The "almost countries" list includes independent countries that lack recognition or don\'t have a seat at the UN, as well as territories which are a part of another country but enjoys some level of autonomy. Try to find it using as few hints as possible !'}</p>
      </header>
      <Prompt country={country} language={language} isMidnight={isMidnight} win={win} setWin={setWin}/>
      <Hints country={country} setCountry={setCountry} language={language} midnight={midnight} isMidnight={isMidnight} setIsMidnight={setIsMidnight} win={win}/>
    </main>
  )
}
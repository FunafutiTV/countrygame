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
        
  const job = schedule.scheduleJob('0 22 * * *', function() {
    setIsMidnight(true);
    setMidnight(midnight + 1);
  })

  return (
    <main>
      <LanguagePicker language={language} setLanguage={setLanguage}/>
      <Hints country={country} setCountry={setCountry} language={language} midnight={midnight} isMidnight={isMidnight} setIsMidnight={setIsMidnight}/>
      <Prompt country={country} language={language} isMidnight={isMidnight}/>
    </main>
  )
}
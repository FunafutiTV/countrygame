import { useState, useEffect } from 'react';
import ClickZone from 'components/clickzone.js';
import Timer from 'components/timer.js';
import DisplayCPS from 'components/displaycps.js';
import Ranking from 'components/ranking.js';
import Prompt from 'components/prompt.js';

export default function Home() {
  let [timerZero, setTimerZero] = useState(false);
  let [firstClick, setFirstClick] = useState(false);
  let [nbClicks, setNbClicks] = useState(null);
  let [refresh, setRefresh] = useState(false);
  let [pseudo, setPseudo] = useState(null);

  useEffect(() => {
    if (refresh) {
      setTimerZero(false);
      setNbClicks(0);
      setFirstClick(false);
      setRefresh(false);
    } else {
      return;
    }
  }, [refresh])

  return (
    <main>
      <ClickZone setFirstClick={setFirstClick} timerZero={timerZero} setNbClicks={setNbClicks}/>
      <Timer firstClick={firstClick} refresh={refresh} setTimerZero={setTimerZero}/>
      <DisplayCPS clicks={nbClicks} setRefresh={setRefresh}/>
      <Ranking name={pseudo} clicks={nbClicks}/>
      <Prompt setPseudo={setPseudo}/>
    </main>
  )
}

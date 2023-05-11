import { useEffect, useState } from 'react';

/*
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Ranking({ clicks, name }) {
  let [boolean, setBoolean] = useState(0);
  let CPS = Math.round(clicks*100/15)/100;
  const { data, error } = useSWR("/api/staticdata", fetcher);
  let keys = null;
  let mydata = null;
  if (data) {
    mydata = JSON.parse(data);
    keys = Object.keys(mydata);
  }

  useEffect(() => {
    if (data) {
      mydata[name] = {
        "name": name,
        "score": `${CPS}`
      }
      const response = fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify(mydata),
      })
      setBoolean(boolean ? 0 : 1);
    }
  }, [name])

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  */

export default function Ranking({ clicks, name, highscores }) {
  /*
  const [highscores, setHighscores] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await fetch("/api/list");
      const resultsJson = await results.json();
      setHighscores(resultsJson);
    })();
  }, [])

  return (
    <div>
      <h1>Classement</h1>
      <ul>
        {highscores.map((highscore, index) => {
            return (<li key={highscore._id}>{index + 1} - {highscore.name} : {highscore.score} CPS</li>)
        })}
      </ul>
    </div>
  );
}
*/
return (
  <div>
    <h1>Classement</h1>
    <ul>
      {highscores.map((highscore, index) => {
          return (<li key={highscore._id}>{index + 1} - {highscore.name} : {highscore.score} CPS</li>)
      })}
    </ul>
  </div>
);
}

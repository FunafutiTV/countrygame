import { useEffect, useState } from 'react';

export default function Ranking({ clicks, name, highscores }) {
  let CPS = Math.round(clicks*100/15)/100;

  useEffect(() => {
    if (highscores && name && CPS > 0) {
      const response = fetch('/api/post', {
        method: 'POST',
        body: name + "#" + CPS,
      })
    }
  }, [name])

  if (!highscores) return <div>Loading...</div>;
  
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

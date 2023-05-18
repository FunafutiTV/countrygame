import Head from 'next/head'
  
export default function Home({ componentArray }) {
  return(
    <main>
      <ul>
        {componentArray.map((component, key) => {return <li key={key}>{component}</li>})} 
      </ul>
    </main>
  )
}
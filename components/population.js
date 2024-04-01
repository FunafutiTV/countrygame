import countrylist from '../public/countrylist.js'

export default function Population({ country, language }) {
    return(
        <div className="hint">
            {language === "fr" ? <><h1>Population :</h1> <div className='answer'>{countrylist[country].population.fr}</div></> : <><h1>Population :</h1> <div className='answer'>{countrylist[country].population.en}</div></>}
        </div> // Retrieve the population from the countrylist.js document and display it
    )
}
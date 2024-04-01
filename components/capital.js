import countrylist from '../public/countrylist.js'

export default function Capital({ country, language }) {
    return(
        <div className="hint">
            {language === "fr" ? <><h1>Capitale :</h1> <div className='answer'>{countrylist[country].capital.fr}</div></> : <><h1>Capital city :</h1> <div className='answer'>{countrylist[country].capital.en}</div></>}
        </div> // Retrieve the capital from the countrylist.js document and display it
    )
}
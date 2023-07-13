import countrylist from '../public/countrylist.js'

export default function Population({ country, language }) {
    return(
        <div className="hint">
            <h2>Population : {language === "fr" ? countrylist[country].population.fr : countrylist[country].population.en}</h2>
        </div> // Retrieve the population from the countrylist.js document and display it
    )
}
import countrylist from '../public/countrylist.js'

export default function Population({ country, language }) {
    return(
        <div>
            <h2>Population : {language === "fr" ? countrylist[country].population.fr : countrylist[country].population.en}</h2>
        </div>
    )
}
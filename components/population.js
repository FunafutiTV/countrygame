import countrylist from '../public/countrylist.js'

export default function Population({ country, language }) {
    let population = countrylist[country].population;
    return(
        <div>
            <h2>Population : {language === "fr" ? population : population.replaceAll(' ', ',')}</h2>
        </div>
    )
}
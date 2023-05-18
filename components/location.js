import countrylist from '../public/countrylist.js'

export default function Location({ country, language }) {
    return(
        <div>
            <h2>{language === "fr" ? "Localisation :" : "Location :"}</h2>
            <img className="location" src={countrylist[country].location}/>
        </div>
    )
}
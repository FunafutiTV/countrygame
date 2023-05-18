import countrylist from '../public/countrylist.js'

export default function Capital({ country, language }) {
    return(
        <div>
            <h2>{language === "fr" ? `Capitale : ${countrylist[country].capital.fr}` : `Capital city : ${countrylist[country].capital.en}`}</h2>
        </div>
    )
}
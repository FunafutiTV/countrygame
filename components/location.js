import countrylist from '../public/countrylist.js'

export default function Location({ country, language }) {
    if (country === "Order_of_Malta") {
        return(
            <div className="hint">
                <h2>{language === "fr" ? "Localisation : Il ne possède aucun territoire" : "Location : It owns no territory"}</h2>
            </div>
        )
    }

    return(
        <div className="hint">
            <h2>{language === "fr" ? "Localisation :" : "Location :"}</h2>
            <img className="location" src={countrylist[country].location}/>
        </div>
    )
}
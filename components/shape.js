import countrylist from '../public/countrylist.js'

export default function Shape({ country, language }) {
    if (country === "Order_of_Malta") {
        return(
            <div className="hint">
                <h2>{language === "fr" ? "Forme du pays : Il ne possède aucun territoire" : "Country shape : It owns no territory"}</h2>
            </div>
        )
    }

    return(
        <div className="hint">
            <h2>{language === "fr" ? "Forme du pays :" : "Country shape :"}</h2>
            <img className="shape" src={countrylist[country].shape}/>
        </div>
    )
}
import countrylist from '../public/countrylist.js'

export default function Shape({ country, language }) {
    return(
        <div>
            <h2>{language === "fr" ? "Forme du pays :" : "Country shape :"}</h2>
            <img className="flag" src={countrylist[country].shape}/>
        </div>
    )
}
import countrylist from '../public/countrylist.js'

export default function Flag({ country, language }) {
    return(
        <div className="hint">
            <h2>{language === "fr" ? "Drapeau :" : "Flag :"}</h2>
            <img className="flag" src={countrylist[country].flag}/>
        </div>
    )
}
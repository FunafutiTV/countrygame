import countrylist from '../public/countrylist.js'

export default function Flag({ country, language }) {
    return(
        <div className="hint">
            <h1>{language === "fr" ? "Drapeau :" : "Flag :"}</h1>
            <div className='answer'><img className="flag" src={countrylist[country].flag}/></div>
        </div> // Retrieve the flag image from the countrylist.js document and display it
    )
}
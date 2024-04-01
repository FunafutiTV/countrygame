import countrylist from '../public/countrylist.js'

export default function Location({ country, language }) {
    if (country === "Order_of_Malta") {
        return(
            <div className="hint">
                {language === "fr" ? <><h1>Localisation :</h1> <div className='answer'>Il ne possède aucun territoire</div></> : <><h1>Location :</h1> <div className='answer'>It owns no territory</div></>}
            </div> // The Order of Malta is a special case which doesn't have a territory
        )
    }

    return(
        <div className="hint">
            <h1>{language === "fr" ? "Localisation :" : "Location :"}</h1>
            <div className='answer'><img className="location" src={countrylist[country].location}/></div>
        </div> // Retrieve the location image from the countrylist.js document and display it
    )
}
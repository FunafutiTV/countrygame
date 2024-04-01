import countrylist from '../public/countrylist.js'

export default function Shape({ country, language }) {
    if (country === "Order_of_Malta") {
        return(
            <div className="hint">
                {language === "fr" ? <><h1>Forme du pays :</h1> <div className='answer'>Il ne possède aucun territoire</div></> : <><h1>Country shape :</h1> <div className='answer'>It owns no territory</div></>}
            </div> // The Order of Malta is a special case which doesn't have a territory
        )
    }

    return(
        <div className="hint">
            <h1>{language === "fr" ? "Forme du pays :" : "Country shape :"}</h1>
            <div className='answer'><img className="shape" src={countrylist[country].shape}/></div>
        </div> // Retrieve the shape image from the countrylist.js document and display it
    )
}
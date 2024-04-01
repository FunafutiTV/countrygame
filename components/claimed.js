import countrylist from '../public/countrylist.js'

export default function Claimed({ country, language }) {
    return(
        <div className="hint">
            {language === "fr" ? <><h1>Son territoire est revendiqué par (ou à appartient à)</h1> <div className='answer'>{countrylist[country].claimed.fr}</div></> 
            : <><h1>Its territory is claimed by (or belongs to)</h1> <div className="answer">{countrylist[country].claimed.en}</div></>}
        </div> // Retrieve the country that claims this country's territory from the countrylist.js document and display it
    )
}
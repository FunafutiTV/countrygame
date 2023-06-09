import countrylist from '../public/countrylist.js'

export default function Claimed({ country, language }) {
    return(
        <div className="hint">
            <h2>{language === "fr" ? `Son territoire est revendiqué par (ou à appartient à) ${countrylist[country].claimed.fr}` 
            : `Its territory is claimed by (or belongs to) ${countrylist[country].claimed.en}`}</h2>
        </div> // Retrieve the country that claims this country's territory from the countrylist.js document and display it
    )
}
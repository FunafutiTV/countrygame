import countrylist from '../public/countrylist.js'

export default function Claimed({ country, language }) {
    return(
        <div>
            <h2>{language === "fr" ? `Ce pays est revendiqué par (ou à appartient à) ${countrylist[country].claimed.fr}` 
            : `This country is claimed by (or belongs to) ${countrylist[country].claimed.en}`}</h2>
        </div>
    )
}
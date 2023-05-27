import { useState } from 'react';

export default function LanguagepPicker({ language, setLanguage }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const openDropdown = () => {
        setIsDropdownOpen(true);
    };

    function handleFrenchClick() {
        setLanguage("fr");
        setIsDropdownOpen(false);
    }

    function handleEnglishClick() {
        setLanguage("en");
        setIsDropdownOpen(false);
    }

    return (
        <div id="language-picker">
        {(language === "fr") ? 
            <>
                <button className="fr" onMouseEnter={openDropdown} onMouseLeave={toggleDropdown}>Français</button>
                {isDropdownOpen && <div className="dropdown">
                    <button className="en" onMouseEnter={openDropdown} onMouseLeave={toggleDropdown} onClick={handleEnglishClick}>Anglais</button>
                </div>}
            </> :
            <>
                <button className="en" onMouseEnter={openDropdown} onMouseLeave={toggleDropdown}>English</button>
                {isDropdownOpen && <div className="dropdown">
                    <button className="fr" onMouseEnter={openDropdown} onMouseLeave={toggleDropdown} onClick={handleFrenchClick}>French</button>
                </div>}
            </>
        }
            
        </div>
    )
}
export default function LanguagepPicker({ language, setLanguage }) {
    function handleFrenchClick() {
        setLanguage("fr")
    }

    function handleEnglishClick() {
        setLanguage("en")
    }

    return (
        <div>
            <button onClick={handleFrenchClick}>{(language === "fr") ? "Français" : "French"}</button>
            <button onClick={handleEnglishClick}>{(language === "fr") ? "Anglais" : "English"}</button>
        </div>
    )
}
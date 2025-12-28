import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";




export function useLanguage(){
    const context = useContext(LanguageContext)

    if (!context){
        throw new Error("useLanguage debe de ser utilizado en el interior de un LanguageProvider")
    }

    const { language, setLanguage, getLanguageCPL} = context

    return {
        language,
        setLanguage,
        getLanguageCPL
    }

}
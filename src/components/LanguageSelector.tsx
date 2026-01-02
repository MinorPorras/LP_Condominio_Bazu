import type { LANGUAGE_SELECTOR_PROPS } from "../constants/generalTypes";

export function LanguageSelector({isCollapsed, isSpanish, handleToggleLanguage, className}: LANGUAGE_SELECTOR_PROPS){
    return(
              <div className={`${className} ${isCollapsed ? "collapsed" : ""}`}>
        <label className={`${className}-language-switch-label`} htmlFor="languageSwitch">
          {isSpanish ? (
            <span className="fi fi-es custom-flag-size"></span>
          ) : (
            <span className="fi fi-us custom-flag-size"></span>
          )}
          <span className="lang-name-text">
            {isSpanish ? "Español" : "English"}
          </span>
        </label>
        <div
          className="form-check form-switch language-switch-container"
          hidden={isCollapsed}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="languageSwitch"
            checked={isSpanish} // Vincula el estado al switch
            onChange={handleToggleLanguage} // Dispara el cambio
          />
        </div>
      </div>
    )
}
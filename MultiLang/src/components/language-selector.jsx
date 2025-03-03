import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [ 
  {code : "en" , lang : "English"},
  {code : "hi" , lang : "Hindi"},
  {code : "fr" , lang : "French"},
  {code : "ar" , lang : "Arabic"},
];


const LanguageSelector = () => {
    const {i18next} = useTranslation();

    useEffect(() => {
      document.body.dir = i18next.dir();
    } , [i18next , i18next.language]);

    const changeLanguage = (lng) => {
       i18next.changeLanguage(lng);
    };

    return (
       <div className="btn-container">
         {languages.map((lng) => {
           return (
             <button className={lng.code === i18next.language ? "selected" : ""}
             key={lng.code}
             onClick={() => changeLanguage(lng.code)}>

              {lng.lang}

             </button>
           );
         })}
       </div>
    )
};


export default LanguageSelector;
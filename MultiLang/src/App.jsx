import LanguageSelector from "./components/language-selector";
import { useTranslation } from "react-i18next";
import './App.css'



function App() {
   const {t } = useTranslation();

  const {line1 , line2} = t("description" , {framework : "i18next"});
   
  return (
     <div className="container">
      <h1>{t("greeting")}</h1>
      <p>{line1}</p>
      <span>{line2}</span>
     </div>
  );
}

export default App;

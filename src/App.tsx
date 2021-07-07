import React from 'react';
import './App.css';
import BattleCatsChart from "./charts/BattleCatsChart";
import UndertaleChart from "./charts/UndertaleChart";
import GeometryDashChart from "./charts/GeometryDashChart";
import StevenUniverseChart from "./charts/StevenUniverseChart";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation(['translation']);
  const changeLanguage = () => {
    let lng = 'en';
    if (i18n.language === 'en') {
      lng = 'ru';
    }
    i18n.changeLanguage(lng).then();
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="left-title">
          Wiki WAM Log<br/>༼ つ ◕_◕ ༽つ
          <button className="lang-button" aria-label="Switch language (en/ru)" title="Switch language (en/ru)"
                  onClick={() => changeLanguage()}>
            🌎
          </button>
        </div>
        <div className="right-title">
          {t("wamIntroStart")}
          <br/>
          {t("wamIntroFinish")}
        </div>
      </header>
      <main className="main-content">
        <div className="charts-block">
          <div className="charts-names">{t("undertale")}</div>
          <UndertaleChart/>
          <div className="charts-names">{t("geometryDash")}</div>
          <GeometryDashChart/>
          <div className="charts-names">{t("stevenUniverse")}</div>
          <StevenUniverseChart/>
          <div className="charts-names">{t("battleCats")}</div>
          <BattleCatsChart/>
        </div>
      </main>
      <footer className="footer-block">
        <div>2021 <span role="img" aria-label="cookieEmoji">🍪</span></div>
      </footer>
    </div>
  );
}

export default App;

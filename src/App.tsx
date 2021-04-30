import React from 'react';
import './App.css';
import githubIcon from './img/GitHub-Mark-32px.png';
import BattleCatsChart from "./charts/BattleCatsChart";
import UndertaleChart from "./charts/UndertaleChart";
import GeometryDashChart from "./charts/GeometryDashChart";
import StevenUniverseChart from "./charts/StevenUniverseChart";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p>
          Wiki WAM Log ༼ つ ◕_◕ ༽つ
        </p>
      </header>
      <main className="main-content">
        <div className="main-text">
          WAM (Wiki Activity Monitor) — рейтинг крупнейших википроектов на FANDOM'е.
          Каждой вики на основе различных (и неизвестных) параметров проставлялся балл от 0 до 100 (больше — лучше),
          после чего составлялся рейтинг (который обновлялся каждый день).<br/>
          С помощью специальных скриптов можно было сохранять у себя значения рейтинга, что и позволило построить графики.
        </div>
        <div className="graph">
          <div>Undertale вики</div>
          <UndertaleChart />
          <div>Geometry Dash вики</div>
          <GeometryDashChart />
          <div>Steven Universe вики</div>
          <StevenUniverseChart />
          <div>The Battle Cats вики</div>
          <BattleCatsChart />
        </div>
      </main>
      <footer className="footer-block">
        <div>
          <a href="https://github.com/DoubleCookies" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} width="32px" height="32px" alt={"githubIcon"} /></a>
        </div>
        <div className="footer-font">
          2021 <span role="img" aria-label="cookieEmoji">🍪</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

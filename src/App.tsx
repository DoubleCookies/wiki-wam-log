import React from 'react';
import './App.css';
import BattleCatsChart from "./charts/BattleCatsChart";
import UndertaleChart from "./charts/UndertaleChart";
import GeometryDashChart from "./charts/GeometryDashChart";
import StevenUniverseChart from "./charts/StevenUniverseChart";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="left-title">
          Wiki WAM Log<br/>༼ つ ◕_◕ ༽つ
        </div>
        <div className="right-title">
          WAM (Wiki Activity Monitor) — рейтинг крупнейших википроектов на FANDOM'е.
          Каждой вики на основе различных (и неизвестных) параметров проставлялся балл от 0 до 100 (больше — лучше),
          после чего составлялся рейтинг (который обновлялся каждый день).<br/>
          С помощью специальных скриптов можно было сохранять у себя значения рейтинга, что и позволило построить графики.
        </div>
      </header>
      <main className="main-content">
        <div className="charts-block">
          <div className="charts-names">Undertale вики</div>
          <UndertaleChart />
          <div className="charts-names">Geometry Dash вики</div>
          <GeometryDashChart />
          <div className="charts-names">Steven Universe вики</div>
          <StevenUniverseChart />
          <div className="charts-names">The Battle Cats вики</div>
          <BattleCatsChart />
        </div>
      </main>
      <footer className="footer-block">
        <div>2021 <span role="img" aria-label="cookieEmoji">🍪</span></div>
      </footer>
    </div>
  );
}

export default App;

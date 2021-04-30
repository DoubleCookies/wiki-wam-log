import React from 'react';
import './App.css';
import githubIcon from './img/GitHub-Mark-32px.png';
import {AreaChart, Area, XAxis, YAxis, Tooltip} from 'recharts';

function App() {
  const data: {key: string, WAM: number}[] = [];
  data.push({key:'1.01.2021', WAM: 97.666});
  data.push({key:'2.01.2021', WAM: 92.666});
  data.push({key:'3.01.2021', WAM: 99.666});

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
          <div>*Графики*</div>
          <AreaChart width={800} height={400} data={data}>
            <Area type="monotone" dataKey="WAM" stroke="#8884d8" fillOpacity={1} fill="orange" />
            <XAxis dataKey="key" />
            <YAxis domain={[50, 100]} />
            <Tooltip />
          </AreaChart>
        </div>
      </main>
      <footer className="footer-block">
        <div className="footer-font">
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

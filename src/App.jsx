import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome';

function App() {
  return (
    <>
      <div className="txt-name">
        <Welcome name="Cát Tường" />
      </div>

      <div>
        <h2>Sở thích: nghe nhạc, đọc truyện, chơi game</h2>
        <h2>Lớp: 26.SP.IT3</h2>
      </div>
    </>
  );
}

export default App;
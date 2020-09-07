import React, { useState } from 'react';
import Header from './Header';
import Scoreboard from './Scoreboard/Scoreboard';
import './App.scss';
import Rankings from './Rankings/Rankings';

function App() {
  const [owner, setOwner] = useState<string | null>(null);

  return (
    <div className="App">
      <Header owner={owner} setOwner={setOwner} />
      <Scoreboard owner={owner} />
      <Rankings />
    </div>
  );
}

export default App;

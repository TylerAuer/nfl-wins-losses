import React, { useState } from 'react';
import Header from './Header';
import Scoreboard from './Scoreboard/Scoreboard';
import Rankings from './Rankings/Rankings';
import useRankings from '../hooks/useRankings';
import './App.scss';

function App() {
  const [owner, setOwner] = useState<string | null>(null);
  const { rankings, loading } = useRankings();

  return (
    <div className="App">
      <Header owner={owner} setOwner={setOwner} rankings={rankings} />
      <Scoreboard owner={owner} />
      <Rankings loading={loading} rankings={rankings} />
    </div>
  );
}

export default App;

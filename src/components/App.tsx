import React, { useState } from 'react';
import Header from './Header';
import ScoreboardSection from './Scoreboard/ScoreboardSection';
import RankingsSection from './Rankings/RankingsSection';
import Rooting from './Rooting/Rooting';
import useRankings from '../hooks/useRankings';
import useOwnersByTeam from '../hooks/useOwnersByTeam';
import './App.scss';

function App() {
  const [userSelectedOwner, setUserSelectedOwner] = useState('');
  const { ownersByTeam, loading: oLoading } = useOwnersByTeam();
  const { rankings, loading: rloading } = useRankings();

  return (
    <div className="App">
      <Header
        owner={userSelectedOwner}
        setOwner={setUserSelectedOwner}
        rankings={rankings}
      />
      <ScoreboardSection
        userSelectedOwner={userSelectedOwner}
        ownersByTeam={ownersByTeam}
        oLoading={oLoading}
      />
      <RankingsSection
        loading={rloading}
        rankings={rankings}
        userSelectedOwner={userSelectedOwner}
      />
      {/* <Rooting ownersByTeam={ownersByTeam} oLoading={oLoading} /> */}
    </div>
  );
}

export default App;

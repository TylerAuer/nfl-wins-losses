import React from 'react';
import { OwnersByTeam, TeamsByDivision } from '../../interfaces';
import DivisionRooting from './DivisionRooting';
import './RootingSection.scss';

interface RootingSectionProps {
  ownersByTeam: OwnersByTeam;
  loading: boolean;
}

export default function RootingSection({
  ownersByTeam,
  loading,
}: RootingSectionProps) {
  if (loading) {
    return <h2 className="section-header">Hang in there...loading data</h2>;
  }

  const teamsByDivision: TeamsByDivision = {
    AFC: {
      EAST: [],
      WEST: [],
      SOUTH: [],
      NORTH: [],
    },
    NFC: {
      EAST: [],
      WEST: [],
      SOUTH: [],
      NORTH: [],
    },
  };

  // populate teamsByDivision
  for (let abbr in ownersByTeam) {
    const team = ownersByTeam[abbr];
    team.abbr = abbr;
    const division = ownersByTeam[abbr].division;
    const conference = ownersByTeam[abbr].conference;

    teamsByDivision[conference][division].push(team);
    teamsByDivision[conference][division].sort((a, b) => {
      const wins = b.winCount - a.winCount;
      // If tied in wins, sort by losses
      if (wins === 0) {
        return a.lossCount - b.lossCount;
      }
      return wins;
    });
  }

  const nfc = (
    <div className="rooting__conference">
      {Object.entries(teamsByDivision.NFC).map(([division, teamList]) => (
        <DivisionRooting
          key={`NFC-${division}`}
          conference="NFC"
          division={division}
          teamList={teamList}
        />
      ))}
    </div>
  );

  const afc = (
    <div className="rooting__conference">
      {Object.entries(teamsByDivision.AFC).map(([division, teamList]) => (
        <DivisionRooting
          conference="AFC"
          key={`AFC-${division}`}
          division={division}
          teamList={teamList}
        />
      ))}
    </div>
  );

  return (
    <section className="rooting">
      <h2 className="section-header">Owners By Division</h2>
      {nfc}
      {afc}
    </section>
  );
}

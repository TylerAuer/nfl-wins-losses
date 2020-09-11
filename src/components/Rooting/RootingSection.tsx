import React from 'react';
import {
  ConferenceDivisions,
  OwnersByTeam,
  TeamsByDivision,
} from '../../interfaces';
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
    teamsByDivision[conference][division].sort(
      (a, b) => b.winCount - a.winCount
    );
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
      <h2 className="section-header">Who Are You Rooting Against?</h2>
      {nfc}
      {afc}
    </section>
  );
}

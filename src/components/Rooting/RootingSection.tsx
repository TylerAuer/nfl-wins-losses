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
  }

  const nfc = (
    <div className="rooting__conference">
      {Object.entries(teamsByDivision.NFC).map(([division, teamList]) => {
        console.log(teamList);
        return (
          <DivisionRooting
            conference="NFC"
            division={division}
            teamList={teamList}
          />
        );
      })}
    </div>
  );

  const afc = (
    <div className="rooting__conference">
      {Object.entries(teamsByDivision.AFC).map(([division, teamList]) => {
        console.log(teamList);
        return (
          <DivisionRooting
            conference="AFC"
            division={division}
            teamList={teamList}
          />
        );
      })}
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

import React from 'react';
import { OwnersByTeam } from '../../interfaces';
import TeamRooting from './TeamRooting';

interface RootingSection {
  ownersByTeam: OwnersByTeam;
  loading: boolean;
}

export default function RootingSection({
  ownersByTeam,
  loading,
}: RootingSection) {
  if (loading) {
    return <h2 className="section-header">Hang in there...loading data</h2>;
  }

  const teamList = Object.keys(ownersByTeam);
  teamList.sort();

  const ListOfTeamRootings = teamList.map((abbr) => (
    <TeamRooting
      key={abbr}
      winsOwner={ownersByTeam[abbr].wins}
      lossesOwner={ownersByTeam[abbr].losses}
      teamAbbr={abbr}
    />
  ));

  return (
    <section className="rooting">
      <h2 className="section-header">Who Are You Rooting Against?</h2>
      {ListOfTeamRootings}
    </section>
  );
}

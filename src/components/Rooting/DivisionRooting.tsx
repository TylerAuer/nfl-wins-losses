import React from 'react';
import { TeamOwners } from '../../interfaces';
import './DivisionRooting.scss';

interface TeamInDivisionProps {
  team: TeamOwners;
}

function TeamInDivision({ team }: TeamInDivisionProps) {
  return (
    <div className="rooting__team">
      <img
        className={`rooting__logo`}
        alt={team.abbr}
        src={require(`../../logos/${team.abbr}.png`)}
      />
      <div className="rooting__owner rooting__owner--wins">
        {team.wins?.info.shortName}
      </div>
      <div className="rooting__owner rooting__owner--losses">
        {team.losses?.info.shortName}
      </div>
    </div>
  );
}

interface DivisionProps {
  teamList: TeamOwners[];
  conference: string;
  division: string;
}

export default function DivisionRooting({
  teamList,
  conference,
  division,
}: DivisionProps) {
  return (
    <div className="division">
      <div className="division__name">
        {conference} {division}
      </div>
      {teamList.map((team) => (
        <TeamInDivision team={team} />
      ))}
    </div>
  );
}

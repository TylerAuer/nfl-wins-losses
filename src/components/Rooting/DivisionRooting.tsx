import React from 'react';
import { TeamOwners } from '../../interfaces';
import './DivisionRooting.scss';

interface TeamInDivisionProps {
  team: TeamOwners;
}

function TeamInDivision({ team }: TeamInDivisionProps) {
  return (
    <div className="team">
      <div className="team__owner team__owner--wins">
        {team.wins?.info.shortName}
      </div>
      <img
        className={`team__logo`}
        alt={team.abbr}
        src={require(`../../logos/${team.abbr}.png`)}
      />
      <div className="team__owner team__owner--losses">
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

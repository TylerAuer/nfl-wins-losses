import React from 'react';
import { TeamOwners } from '../../interfaces';
import './DivisionRooting.scss';

interface TeamInDivisionProps {
  team: TeamOwners;
}

function TeamInDivision({ team }: TeamInDivisionProps) {
  return (
    <div className="div-team">
      <div className="div-team__owner div-team__owner--wins">
        {team.wins ? (
          <>
            {team.wins.info.shortName} {team.winCount}
          </>
        ) : (
          <>{team.winCount}</>
        )}
      </div>
      <a href={team.espnLink}>
        <img
          className={`div-team__logo`}
          alt={team.abbr}
          src={require(`../../logos/${team.abbr}.png`)}
        />
      </a>
      <div className="div-team__owner div-team__owner--losses">
        {team.losses ? (
          <>
            {team.losses.info.shortName} {team.lossCount}
          </>
        ) : (
          <>{team.lossCount}</>
        )}
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
      {teamList.map((team, i) => (
        <TeamInDivision key={i} team={team} />
      ))}
    </div>
  );
}

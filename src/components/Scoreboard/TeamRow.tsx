import React from 'react';
import './Team.scss';
import { OwnersByTeam } from '../../interfaces';
import { Team } from '../../../srcBackend/classes/Team';
import TeamOwner from './TeamOwner';

interface TeamRowProps {
  userSelectedOwner: string;
  ownersByTeam: OwnersByTeam;
  team: Team;
  score: string;
  winnerAbbr: string | null;
}

export default function TeamRow({
  userSelectedOwner,
  ownersByTeam,
  team,
  score,
  winnerAbbr,
}: TeamRowProps) {
  const espnLink = team.info.espnLink;
  const abbr = team.info.abbr;
  const fullName = team.info.fullName;
  const record = team.record;
  const winsOwner = ownersByTeam[abbr].wins;
  const lossesOwner = ownersByTeam[abbr].losses;
  const isGameOver = !!winnerAbbr; // There is only a game winner if winnerAbbr is not null
  const isWinner = isGameOver && winnerAbbr === abbr;

  return (
    <div className="team">
      <a href={espnLink}>
        <img
          className="team__logo"
          alt={`${abbr} logo`}
          src={require(`../../logos/${abbr}.png`)}
        />
      </a>
      <div className="team__name-and-owners">
        <div className="team__team-name">
          <a
            href={espnLink}
            style={{
              color: isWinner ? 'grey' : undefined,
            }}
          >
            {fullName}
          </a>
          <span className="team__record">{record}</span>
        </div>
        <div className="team__owners">
          <TeamOwner
            earnedPoints={isGameOver && isWinner}
            isUserSelectedOwner={
              winsOwner?.info.shortName === userSelectedOwner
            }
            ownershipType="wins"
            ownerShortName={winsOwner?.info.shortName}
          />
          <TeamOwner
            earnedPoints={isGameOver && !isWinner}
            isUserSelectedOwner={
              lossesOwner?.info.shortName === userSelectedOwner
            }
            ownershipType="losses"
            ownerShortName={lossesOwner?.info.shortName}
          />
        </div>
      </div>
      <div
        className="team__score"
        style={{
          color: isWinner ? 'grey' : undefined,
        }}
      >
        {score}
      </div>
    </div>
  );
}

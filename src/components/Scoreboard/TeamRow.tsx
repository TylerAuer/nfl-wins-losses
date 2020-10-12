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
  hasPossession: boolean;
  winPercentage: number;
}

export default function TeamRow({
  userSelectedOwner,
  ownersByTeam,
  team,
  score,
  winnerAbbr,
  hasPossession,
  winPercentage,
}: TeamRowProps) {
  const espnLink = team.info.espnLink;
  const abbr = team.info.abbr;
  const fullName = team.info.fullName;
  const winsOwner = ownersByTeam[abbr].wins;
  const lossesOwner = ownersByTeam[abbr].losses;
  const isGameOver = !!winnerAbbr; // There is only a game winner if winnerAbbr is not null
  const isWinner = winnerAbbr === abbr;

  const winPercentageHTML =
    winPercentage >= 0 ? (
      <div className="team__win-percentage">
        {Math.round(winPercentage * 1000) / 10}%
      </div>
    ) : null;

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
              color: isGameOver && !isWinner ? 'grey' : undefined,
            }}
          >
            {fullName}
          </a>
          {hasPossession && <div className="team__possession" />}
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
            earnedPoints={isGameOver && !isWinner && winnerAbbr !== 'tie'}
            isUserSelectedOwner={
              lossesOwner?.info.shortName === userSelectedOwner
            }
            ownershipType="losses"
            ownerShortName={lossesOwner?.info.shortName}
          />
        </div>
      </div>
      <div className="team__score-and-win-percentage">
        <div
          className="team__score"
          style={{
            color: isGameOver && !isWinner ? 'grey' : undefined,
          }}
        >
          {score}
        </div>
        {winPercentageHTML}
      </div>
    </div>
  );
}

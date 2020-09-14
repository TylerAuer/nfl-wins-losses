import React from 'react';
import './Team.scss';
import { OwnersByTeam } from '../../interfaces';
import { Team } from '../../../srcBackend/classes/Team';

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
  const isWinner = winnerAbbr && winnerAbbr === abbr;

  let winsOwnerHtml = <div></div>;
  if (winsOwner) {
    const isActiveOwner = winsOwner.info.shortName === userSelectedOwner;

    winsOwnerHtml = (
      <a
        href={`#${winsOwner.info.shortName}`}
        className="team__wins-owner"
        style={{
          color: isActiveOwner ? 'red' : undefined,
          fontWeight: isActiveOwner ? 'bold' : 'normal',
        }}
      >
        W: {winsOwner.info.shortName}
      </a>
    );
  }

  let lossesOwnerHtml = <div></div>;
  if (lossesOwner) {
    const isActiveOwner = lossesOwner.info.shortName === userSelectedOwner;

    lossesOwnerHtml = (
      <a
        href={`#${lossesOwner.info.shortName}`}
        className="team__losses-owner"
        style={{
          color: isActiveOwner ? 'red' : undefined,
          fontWeight: isActiveOwner ? 'bold' : 'normal',
        }}
      >
        L: {lossesOwner.info.shortName}
      </a>
    );
  }

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
          {winsOwnerHtml}
          {lossesOwnerHtml}
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

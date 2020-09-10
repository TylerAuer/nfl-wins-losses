import React from 'react';
import { Owner } from '../../../srcBackend/classes/Owner';
import './TeamRooting.scss';

interface TeamRootingProps {
  winsOwner: Owner | null;
  lossesOwner: Owner | null;
  teamAbbr: string;
}

export default function TeamRooting({
  winsOwner,
  lossesOwner,
  teamAbbr,
}: TeamRootingProps) {
  const winOwner = winsOwner ? winsOwner.info.shortName : '';
  const lossOwner = lossesOwner ? lossesOwner.info.shortName : '';
  return (
    <div className="team-rooting">
      <div className="team-rooting__wins-owner">{winOwner}</div>
      <img
        className={`team-rooting__logo`}
        alt={teamAbbr}
        src={require(`../../logos/${teamAbbr}.png`)}
      />
      <div className="team-rooting__losses-owner">{lossOwner}</div>
    </div>
  );
}

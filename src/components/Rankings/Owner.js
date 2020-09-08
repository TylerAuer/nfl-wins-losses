import React from 'react';
import './Owner.scss';
import TeamCell from './TeamCell';
import prettyRank from '../../functions/prettyRank';

export default function Owner({ owner, rank }) {
  const cells = owner.owner.draft.map((pick, i) => {
    return (
      <TeamCell key={i} pick={pick.info} points={owner.tieBreakers[i + 1]} />
    );
  });

  return (
    <div id={owner.owner.shortName} className="owner">
      <div className="owner__rank">{prettyRank(rank + 1)}</div>
      <div className="owner__name">{owner.owner.shortName}</div>
      <div className="owner__score">{owner.tieBreakers[0]}</div>
      <div className="owner__teams">{cells}</div>
    </div>
  );
}

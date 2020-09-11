import React from 'react';
import TeamCell from './TeamCell';
import { RankInfo } from '../../interfaces';
import prettyRank from '../../functions/prettyRank';
import './Owner.scss';

interface OwnerProps {
  rankInfo: RankInfo;
  rank: number;
  userSelectedOwner: string;
}

export default function OwnerRowInRankings({
  rankInfo,
  rank,
  userSelectedOwner,
}: OwnerProps) {
  const shortName = rankInfo.owner.info.shortName;

  console.log(rankInfo);
  const cells = rankInfo.owner.info.draft.map((pick, i) => {
    const tieBreakers = rankInfo.tieBreakers;
    return (
      <TeamCell
        key={i}
        pick={pick}
        points={tieBreakers[tieBreakers.length - i - 2]}
      />
    );
  });

  return (
    <div id={shortName} className="owner">
      <div className="owner__rank">{prettyRank(rank + 1)}</div>
      <div
        className="owner__name"
        style={{
          color: shortName === userSelectedOwner ? 'red' : undefined,
          fontWeight: shortName === userSelectedOwner ? 'bold' : undefined,
        }}
      >
        {shortName}
      </div>
      <div className="owner__score">{rankInfo.tieBreakers[0]}</div>
      <div className="owner__teams">{cells}</div>
    </div>
  );
}

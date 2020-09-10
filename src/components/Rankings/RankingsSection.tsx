import React from 'react';
import OwnerRowInRankings from './OwnerRowInRankings';
import './Rankings.scss';
import { Rankings } from '../../interfaces';

interface RankingsProps {
  rankings: Rankings;
  loading: boolean;
  userSelectedOwner: string;
}

export default function RankingsSection({
  rankings,
  loading,
  userSelectedOwner,
}: RankingsProps) {
  if (loading) {
    return <h2 className="section-header">Hang in there...loading data</h2>;
  }
  const ranks = rankings.map((rankInfo, index) => {
    return (
      <OwnerRowInRankings
        userSelectedOwner={userSelectedOwner}
        key={index}
        rank={index}
        rankInfo={rankInfo}
      />
    );
  });

  return (
    <section id="rankings">
      <h2 className="section-header">League Rankings</h2>
      <div className="rankings">{ranks}</div>
    </section>
  );
}

import React from 'react';
import Owner from './Owner';
import './Rankings.scss';

export default function Rankings({ rankings, loading }) {
  if (loading) {
    return <h2 className="section-header">Hang in there...loading data</h2>;
  }

  const ranks = rankings.map((owner, index) => (
    <Owner key={index} rank={index} owner={owner} />
  ));

  return (
    <section id="rankings">
      <h2 className="section-header">League Rankings</h2>
      <div className="rankings">{ranks}</div>
    </section>
  );
}

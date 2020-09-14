import React from 'react';
import * as CSS from 'csstype';

interface TeamOwnerProps {
  earnedPoints: boolean;
  isUserSelectedOwner: boolean;
  ownershipType: 'wins' | 'losses';
  ownerShortName?: string | undefined;
}

export default function TeamOwner({
  earnedPoints,
  isUserSelectedOwner,
  ownershipType,
  ownerShortName,
}: TeamOwnerProps) {
  if (!ownerShortName) {
    return null;
  }

  const userSelectedStyle: CSS.Properties = {
    fontWeight: 600,
  };

  const winsEarnedPointStyle: CSS.Properties = {
    color: 'green',
    fontWeight: 600,
  };

  const lossesEarnedPointStyle: CSS.Properties = {
    color: 'red',
    fontWeight: 600,
  };

  // Selects which style to apply
  let activeStyle = null;
  if (isUserSelectedOwner) {
    activeStyle = userSelectedStyle;
  } else if (earnedPoints && ownershipType === 'wins') {
    activeStyle = winsEarnedPointStyle;
  } else if (earnedPoints && ownershipType === 'losses') {
    activeStyle = lossesEarnedPointStyle;
  }

  return (
    <a
      href={`#${ownerShortName}`}
      className={`team__${ownershipType}-owner`}
      style={{ ...activeStyle }}
    >
      {ownershipType === 'wins' ? 'W' : 'L'}: {ownerShortName}
    </a>
  );
}

import { Owner } from '../classes/Owner';
import { TeamAbbr } from '../enums';

interface TeamOwners {
  wins: Owner | null;
  losses: Owner | null;
}

export default function determineOwnersByTeam(owners: {
  [key: string]: Owner;
}): { [key: string]: TeamOwners } {
  const ownersByTeam: { [key: string]: TeamOwners } = {};
  // Map each team abbreviation

  Object.keys(TeamAbbr).forEach((abbr: string) => {
    const teamOwners: TeamOwners = {
      wins: null,
      losses: null,
    };

    Object.values(owners).forEach((owner: Owner) => {
      const draftedTeams = owner.info.draft;
      draftedTeams.forEach((pick) => {
        if (pick.info.team.info.abbr === abbr) {
          teamOwners[pick.info.winsOrLosses] = owner;
        }
      });
    });
    ownersByTeam[abbr] = teamOwners;
  });

  return ownersByTeam;
}

import { Owner } from '../classes/Owner';
import { TeamAbbr, Division, Conference } from '../enums';
import { Team } from '../classes/Team';

interface TeamOwnersAndLeagueInfo {
  wins: Owner | null;
  losses: Owner | null;
  division: Division;
  conference: Conference;
}

export default function determineOwnersByTeam(
  owners: {
    [key: string]: Owner;
  },
  teams: { [key: string]: Team }
): { [key: string]: TeamOwnersAndLeagueInfo } {
  const ownersByTeam: { [key: string]: TeamOwnersAndLeagueInfo } = {};
  // Map each team abbreviation

  Object.keys(TeamAbbr).forEach((abbr: string) => {
    const teamOwners: TeamOwnersAndLeagueInfo = {
      wins: null,
      losses: null,
      division: teams[abbr].info.division,
      conference: teams[abbr].info.conference,
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

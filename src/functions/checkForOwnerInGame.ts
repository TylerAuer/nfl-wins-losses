import { Game } from '../../srcBackend/classes/Game';
import { OwnersByTeam } from '../interfaces';

export default function checkForOwnerInGame(
  game: Game,
  owner: string,
  ownersByTeam: OwnersByTeam
): boolean {
  const awayWinsOwner =
    ownersByTeam[game.info.away.info.abbr].wins?.info.shortName;
  const awayLossesOwner =
    ownersByTeam[game.info.away.info.abbr].losses?.info.shortName;
  const homeWinsOwner =
    ownersByTeam[game.info.home.info.abbr].wins?.info.shortName;
  const homeLossesOwner =
    ownersByTeam[game.info.home.info.abbr].losses?.info.shortName;

  return (
    owner === awayWinsOwner ||
    owner === awayLossesOwner ||
    owner === homeWinsOwner ||
    owner === homeLossesOwner
  );
}

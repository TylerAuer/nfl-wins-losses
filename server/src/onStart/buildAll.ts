// Execute all the build files

import { buildOwners } from './buildOwners';
import { buildTeams } from './buildTeams';

export function buildAll(): void {
  buildOwners();
  buildTeams();
  return;
}

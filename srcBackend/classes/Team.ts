import { Conference, Division } from '../enums';

export interface TeamProps {
  espnId: number; // start at 1 and goes through 34 or something like that
  espnUid: string;
  espnLink: string;
  fullName: string; // New York Giants
  abbr: string; // NYG
  mascot: string; // Giants
  location: string; // New York

  colorPrimaryHex: string;
  colorSecondaryHex: string;

  conference: Conference;
  division: Division;
  byeWeek: number;
}

export class Team {
  wins: number = 0;
  losses: number = 0;
  ties: number = 0;

  constructor(public desc: TeamProps) {}

  // Team's current record in '10 - 6' format or or '10 - 6 - 1' format if a
  // team has had a tie.
  get record(): string {
    let record = `${this.wins} - ${this.losses}`;
    // Only add ties to the record if the team has had a tie
    if (this.ties > 0) {
      record += ` - ${this.ties}`;
    }
    return record;
  }
}

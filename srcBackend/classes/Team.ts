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

  wins: number;
  losses: number;
  ties: number;
}

export class Team {
  record: string = '';

  constructor(public info: TeamProps) {
    this.makeRecordString();
  }

  // Team's current record in '10 - 6' format or or '10 - 6 - 1' format if a
  // team has had a tie.
  makeRecordString(): void {
    let str = `${this.info.wins} - ${this.info.losses}`;
    // Only add ties to the record if the team has had a tie
    if (this.info.ties > 0) {
      str += ` - ${this.info.ties}`;
    }

    this.record = str;
  }
}

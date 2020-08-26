import { Conference, Division } from './enums';

// Data in this file is hard-coded because it wasn't available from an API

interface StaticTeamData {
  conference: Conference;
  division: Division;
  byeWeek: number;
}

export const staticTeamData: { [key: string]: StaticTeamData } = {
  //
  // NFC
  //

  //
  // NFC WEST
  //
  ARI: {
    conference: Conference.Nfc,
    division: Division.West,
    byeWeek: 8,
  },
  SF: {
    conference: Conference.Nfc,
    division: Division.West,
    byeWeek: 11,
  },
  SEA: {
    conference: Conference.Nfc,
    division: Division.West,
    byeWeek: 6,
  },
  LAR: {
    conference: Conference.Nfc,
    division: Division.West,
    byeWeek: 9,
  },

  //
  // NFC NORTH
  //
  GB: {
    conference: Conference.Nfc,
    division: Division.North,
    byeWeek: 5,
  },
  MIN: {
    conference: Conference.Nfc,
    division: Division.North,
    byeWeek: 7,
  },
  CHI: {
    conference: Conference.Nfc,
    division: Division.North,
    byeWeek: 11,
  },
  DET: {
    conference: Conference.Nfc,
    division: Division.North,
    byeWeek: 5,
  },

  //
  // NFC EAST
  //
  NYG: {
    conference: Conference.Nfc,
    division: Division.East,
    byeWeek: 11,
  },
  DAL: {
    conference: Conference.Nfc,
    division: Division.East,
    byeWeek: 10,
  },
  PHI: {
    conference: Conference.Nfc,
    division: Division.East,
    byeWeek: 9,
  },
  WSH: {
    conference: Conference.Nfc,
    division: Division.East,
    byeWeek: 8,
  },

  //
  // NFC SOUTH
  //
  NO: {
    conference: Conference.Nfc,
    division: Division.South,
    byeWeek: 6,
  },
  ATL: {
    conference: Conference.Nfc,
    division: Division.South,
    byeWeek: 10,
  },
  TB: {
    conference: Conference.Nfc,
    division: Division.South,
    byeWeek: 13,
  },
  CAR: {
    conference: Conference.Nfc,
    division: Division.South,
    byeWeek: 13,
  },

  //
  // NFC
  //

  //
  // AFC NORTH
  //
  BAL: {
    conference: Conference.Afc,
    division: Division.North,
    byeWeek: 8,
  },

  PIT: {
    conference: Conference.Afc,
    division: Division.North,
    byeWeek: 8,
  },
  CLE: {
    conference: Conference.Afc,
    division: Division.North,
    byeWeek: 9,
  },
  CIN: {
    conference: Conference.Afc,
    division: Division.North,
    byeWeek: 9,
  },

  //
  // AFC WEST
  //
  KC: {
    conference: Conference.Afc,
    division: Division.West,
    byeWeek: 10,
  },
  DEN: {
    conference: Conference.Afc,
    division: Division.West,
    byeWeek: 8,
  },
  LV: {
    conference: Conference.Afc,
    division: Division.West,
    byeWeek: 6,
  },
  LAC: {
    conference: Conference.Afc,
    division: Division.West,
    byeWeek: 10,
  },

  //
  // AFC EAST
  //
  NE: {
    conference: Conference.Afc,
    division: Division.East,
    byeWeek: 6,
  },
  BUF: {
    conference: Conference.Afc,
    division: Division.East,
    byeWeek: 11,
  },
  NYJ: {
    conference: Conference.Afc,
    division: Division.East,
    byeWeek: 11,
  },
  MIA: {
    conference: Conference.Afc,
    division: Division.East,
    byeWeek: 11,
  },

  //
  // AFC SOUTH
  //
  HOU: {
    conference: Conference.Afc,
    division: Division.South,
    byeWeek: 8,
  },
  TEN: {
    conference: Conference.Afc,
    division: Division.South,
    byeWeek: 7,
  },
  IND: {
    conference: Conference.Afc,
    division: Division.South,
    byeWeek: 7,
  },
  JAX: {
    conference: Conference.Afc,
    division: Division.South,
    byeWeek: 7,
  },
};

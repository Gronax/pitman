/*
 * I'm using interface instead of types.
 * Because It's recommended to use interface when dealing with public APIs.
 * source: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/#types-or-interfaces
 */

export interface Constructor {
  constructorId: string
  url: string
  name: string
  nationality: string
}

export interface Driver {
  driverId?: string
  permanentNumber?: string
  code?: string
  url?: string
  givenName?: string
  familyName?: string
  dateOfBirth?: Date
  nationality?: string
}

export interface DriverStandings {
  Constructors?: Constructor[]
  Driver?: Driver
  points?: string
  position?: string
  positionText?: string
  wins?: string
}

export interface DriverStandingsLists {
  DriverStandings?: DriverStandings[]
  season?: string
  round?: string
}
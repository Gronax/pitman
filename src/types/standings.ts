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

export type DriverStandings = {
  Constructors?: Constructor[]
  Driver?: Driver
  points?: string
  position?: string
  positionText?: string
  wins?: string
}

export type DriverStandingsLists = {
  DriverStandings?: DriverStandings[]
  season?: string
  round?: string
}
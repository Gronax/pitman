/*
 * I'm using interface instead of types.
 * Because It's recommended to use interface when dealing with public APIs.
 * source: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/#types-or-interfaces
 */

export interface DriverStandings {
	position: string
	positionText: string
	points: string
	wins: string
	Driver: Driver
	Constructors: Constructor[]
}

export interface RaceResult {
	Circuit: Circuit
	Results: Result[]
	date: Date
	raceName: string
	round: string
	season: string
	time: string
	url: string
}

export interface Circuit {
	circuitId: string
	url: string
	circuitName: string
	Location: Location
}

export interface Location {
	lat: string
	long: string
	locality: string
	country: string
}

export interface Result {
	number: string
	position: string
	positionText: string
	points: string
	Driver: Driver
	Constructor: Constructor
	grid: string
	laps: string
	status: string
	Time: ResultTime
	FastestLap: FastestLap
}

export interface Driver {
	driverId: string
	permanentNumber: string
	code: string
	url: string
	givenName: string
	familyName: string
	dateOfBirth: Date
	nationality: string
}

export interface Constructor {
	constructorId: string
	url: string
	name: string
	nationality: string
}

export interface ResultTime {
	millis: string
	time: string
}

export interface FastestLap {
	rank: string
	lap: string
	Time: FastestLapTime
	AverageSpeed: AverageSpeed
}

export interface FastestLapTime {
	time: string
}

export interface AverageSpeed {
	units: Units
	speed: string
}

export enum Units {
	Kph = 'kph',
}

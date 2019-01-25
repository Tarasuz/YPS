export enum DaysOfTheWeek {
  monday = 1,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}

export interface Routine {
  routineName: string;
  id: string;
}

export interface Appoint {
  dayOfTheWeek: number;
  startTime: number;
  finishTime: number;
  labelColor: string;
  appointName: string;
  id: string;
}

export interface Bible {
  [index: number]: {
    abbrev: string,
    name: string,
    chapters: [[string]]
  }
}
export interface BibleBook {
  abbrev: string,
  name: string,
  chapters: [[string]]
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './interface.component.html'
})
export class InterfaceComponent {
  title = 'sequence-viewer';
}



export interface ProteinResponse {
  parsedDB: ParsedDB;
  parsedMapping: ParsedMapping;
}

export interface ParsedDB {
  regions: Regions;
  chain: string;
  repeated: string;
  pdbId: string;
}


export interface ParsedMapping {
  indices: Array<string>;
  positions: Array<string>;
  sequence: string;
}

export interface Regions {
  [key: string]: RegDetails;
}

export interface RegDetails {
  start: string;
  end: string;
  units: Units;
  insertions: Insertions;
}

export interface Units {
  [key: string]: UnitDetails;
}

export interface Insertions {
  [key: string]: InsertionsDetails;
}

export interface UnitDetails {
  startPos: string;
  endPos: string;
}


export interface InsertionsDetails {
  startPos: string;
  endPos: string;
}


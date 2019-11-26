export interface IPlace {
  title?: string;
  address?: string;
  lat?: number;
  lng?: number;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IContributor {
  id: number;
  name: string;
  github: string;
}

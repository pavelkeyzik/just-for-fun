export interface IPlace {
  title?: string;
  address?: string;
  lat?: number;
  lng?: number;
}

export interface IPlaceCard {
  information: IPlace;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

import { Action } from '@ngrx/store';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';

export enum FavoriteActionTypes {
  ADD_TO_FAVORITES = 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES',
}

export class AddToFavorite implements Action {
  type: string = FavoriteActionTypes.ADD_TO_FAVORITES;
  constructor(public payload: JobAdvertisement) {}
}

export class RemoveFromFavorite implements Action {
  type: string = FavoriteActionTypes.REMOVE_FROM_FAVORITES;
  constructor(public payload: JobAdvertisement) {}
}

export type FavoriteActions = AddToFavorite | RemoveFromFavorite

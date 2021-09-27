import { FavoriteJob } from 'src/app/models/states/favorite-job';
import {
  FavoriteActions,
  FavoriteActionTypes,
} from '../actions/favorite-actions';

export let initialState: FavoriteJob[] = [];

export function favoriteReducer(state = initialState, action: FavoriteActions) {
  switch (action.type) {
    case FavoriteActionTypes.ADD_TO_FAVORITES:
      let item = state.find((f) => f.jobAdvertisement.id === action.payload.id);
      if (!item) {
        let favItem: FavoriteJob = { jobAdvertisement: action.payload };
        //spread operatoru
        return [...state, favItem];
      } else {
        return [...state];
      }

    case FavoriteActionTypes.REMOVE_FROM_FAVORITES:
      return state.filter((f) => f.jobAdvertisement.id !== action.payload.id);

    default:
      return [...state];
  }
}

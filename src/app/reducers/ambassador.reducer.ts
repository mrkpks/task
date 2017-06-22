import { Ambassador } from '../ambassador';
import { SHORTLIST } from '../ambassadors-data';

import { Action } from '@ngrx/store';

export const ambassadorActions = {
  ADD: 'AMBASSADOR_ADD',
  REMOVE: 'AMBASSADOR_REMOVE',
  UPDATE: 'AMBASSADOR_UPDATE',
  FETCH: 'AMBASSADOR_FETCH'
};

export function ambassadorReducer(state: Ambassador[] = SHORTLIST, action: Action): Ambassador[] {
  switch (action.type) {
    case ambassadorActions.ADD:
      return [...state, action.payload];
    case ambassadorActions.REMOVE:
      return state.filter(amb => amb.id !== action.payload.id);
    case ambassadorActions.UPDATE:
      return state.map((amb) => amb.id === action.payload.id ? {...amb, ...action.payload} : amb);
    case ambassadorActions.FETCH:
      return state;
    default:
      return state;
  }
}

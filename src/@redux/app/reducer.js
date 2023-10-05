/* eslint-disable no-unreachable */
import {SET_LAUNCHES, SET_NEXTLAUNCHES, SET_PASTLAUNCHES} from './types';

const initialState = {
  launches: [],
  pastLaunches: [],
  nextLaunches: [],
};

const reducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case SET_LAUNCHES:
      return {...state, launches: action.payload};
      break;
    case SET_PASTLAUNCHES:
      return {...state, pastLaunches: action.payload};
      break;
    case SET_NEXTLAUNCHES:
      return {...state, nextLaunches: action.payload};
      break;

    default:
      break;
  }

  return state;
};

export default reducer;

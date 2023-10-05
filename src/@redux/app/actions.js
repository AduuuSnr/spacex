import {SET_LAUNCHES, SET_NEXTLAUNCHES, SET_PASTLAUNCHES} from './types';

export const setLaunches = launches => ({
  type: SET_LAUNCHES,
  payload: launches,
});
export const setNextLaunches = nextLaunches => ({
  type: SET_NEXTLAUNCHES,
  payload: nextLaunches,
});
export const setPastLaunches = pastLaunches => ({
  type: SET_PASTLAUNCHES,
  payload: pastLaunches,
});

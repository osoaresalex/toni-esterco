import { createReducer, createActions, Types as defaultypes } from 'reduxsauce';

const DEFAULT_STATE = {
  windowWidth: window.innerWidth,
  isMobile: window.innerWidth < 1100,
  isLoading: false,
};

export function defaultHandler(state) {
  return { ...state };
}

export function windowResize(state, action) {
  const size = window.innerWidth;

  return { windowWidth: size, isMobile: size < 1200 };
}

export function showLoader(state) {
  return { ...state, isLoading: true }
}

export function hideLoader(state) {
  return { ...state, isLoading: false }
}

export const { Types, Creators } = createActions({
  onWindowResize: [],
  showLoader: [],
  hideLoader: [],
});

export default createReducer(DEFAULT_STATE, {
  [defaultypes.DEFAULT]: defaultHandler,
  [Types.ON_WINDOW_RESIZE]: windowResize,
  [Types.SHOW_LOADER]: showLoader,
  [Types.HIDE_LOADER]: hideLoader,
});

import { createReducer, createActions, Types as defaultypes } from 'reduxsauce';

const DEFAULT_STATE = {
  heroes: [],
  limit: window.innerWidth < 1100 ? 4 : 3,
  totalPages: 0,
  offset: 0,
  totalItems: 0,
  name: '',
  selectedHero: {
    comics: {
      "items": [
      ],
    },
    descriptio: "",
    events: {
      "items": [],
    },
    id: 0,
    name: "",
    series: {
      items: [],
    },
    stories: {
      items: [],
    },
    thumbnail: {
      "path": "",
      "extension": ""
    },
    urls: [],
  },
};

export function defaultHandler(state) {
  return { ...state };
}

export function onFetched(state, { totalItems, heroes }) {
  const totalPages = Math.round(totalItems / state.limit);
  return { ...state, heroes, totalItems, totalPages };
}

export function onChangeLimit(state) {
  const isMobile = window.innerWidth < 1100;
  const limit = isMobile ? 4 : 3;
  return { ...state, limit, offset: 0 };
}

export function paginate(state, { offset }) {
  return { ...state, offset };
}

export function changeFilterName(state, { name }) {
  return { ...state, name, offset: 0 };
}

export function selectHero(state, { selectedHero }) {
  return { ...state, selectedHero }
}

export const { Types, Creators } = createActions({
  fetchHeroesAsync: [],
  fetchedHeroes: ['totalItems', 'heroes'],
  changeLimit: [],
  onPaginateAsync: ['offset'],
  onPaginate: ['offset'],
  onFilterAsync: ['name'],
  changeFilterName: ['name'],
  selectHero: ['selectedHero'],
});

export default createReducer(DEFAULT_STATE, {
  [defaultypes.DEFAULT]: defaultHandler,
  [Types.FETCHED_HEROES]: onFetched,
  [Types.CHANGE_LIMIT]: onChangeLimit,
  [Types.ON_PAGINATE]: paginate,
  [Types.CHANGE_FILTER_NAME]: changeFilterName,
  [Types.SELECT_HERO]: selectHero,
});

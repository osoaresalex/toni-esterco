import { takeLatest, put, call, select } from 'redux-saga/effects';
import { Types, Creators } from './heroes-duck';
import { Creators as TemplateCreators } from '../template-duck';
import md5 from "js-md5";

const PUBLIC_KEY = '8753d3f72d17692c327806bc8a360493';

const timestamp = Number(new Date());
const hash = md5.create();

const getHeroesState = (state) => state.Heroes;

function* fetchHeroes() {
  try {
    yield put(TemplateCreators.showLoader());

    const state = yield select(getHeroesState);

    yield hash.update(timestamp + '5cb82d4d6de8ff209bd7e6b3732cf258cadd59e38753d3f72d17692c327806bc8a360493');

    const filterByName = state.name ? `&nameStartsWith=${state.name}` : '';
    let offset = state.limit * state.offset;

    const response = yield call(fetch,
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&${filterByName}&orderBy=name&limit=${state.limit}&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
    );
    const responseBody = yield response.json();

    const { total, results } = responseBody.data;

    yield put(Creators.fetchedHeroes(total, results));

  } catch (e) {
    yield console.log('erro ao consumir api ', e);
  } finally {
    yield put(TemplateCreators.hideLoader());
  }
}

function* paginate({ offset }) {
  yield put(Creators.onPaginate(offset));
  yield fetchHeroes();
}

function* filterByName({ name }) {
  yield put(Creators.changeFilterName(name));
  yield fetchHeroes();
}

export default [
  takeLatest(Types.FETCH_HEROES_ASYNC, fetchHeroes),
  takeLatest(Types.ON_PAGINATE_ASYNC, paginate),
  takeLatest(Types.ON_FILTER_ASYNC, filterByName),];

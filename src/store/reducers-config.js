import {combineReducers} from 'redux';

import Heroes from './heroes/heroes-duck';
import Template from './template-duck';

export default combineReducers({
  Heroes,
  Template,
});

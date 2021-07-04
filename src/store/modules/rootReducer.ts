import { combineReducers } from 'redux';

import { reducer as auth } from './auth/ducks';
import { reducer as user } from './user/ducks';

export default combineReducers({
  auth,
  user,
});
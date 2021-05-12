import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';

import contactsReducer from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;

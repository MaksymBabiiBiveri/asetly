import { combineReducers } from 'redux';
import { ApplicationReducer } from './application.reducer';
import { CompanyReducer } from './company.reducer';
import { DefinitionReducer } from './definition.reducer';

const reducer = combineReducers({
  ApplicationReducer,
  CompanyReducer,
  DefinitionReducer,
});

export default reducer;

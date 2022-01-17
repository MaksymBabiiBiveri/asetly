import { combineReducers } from 'redux';
import { ApplicationReducer } from './application.reducer';
import { CompanyReducer } from './company.reducer';
import { DefinitionReducer } from './definition.reducer';
import { ContractReducer } from './contract.reducer';

const reducer = combineReducers({
  ApplicationReducer,
  CompanyReducer,
  DefinitionReducer,
  ContractReducer,
});

export default reducer;

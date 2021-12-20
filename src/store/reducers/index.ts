import { combineReducers } from 'redux';
import { ApplicationReducer } from './application.reducer';
import { CompanyReducer } from './company.reducer';

const reducer = combineReducers({ ApplicationReducer, CompanyReducer });

export default reducer;

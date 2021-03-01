import { combineReducers } from 'redux';
import expressionReducer from './expression';

const rootReducer = combineReducers({
  expression: expressionReducer,
});

export default rootReducer;

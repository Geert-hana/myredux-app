import { combineReducers } from 'redux';
import counterReducer from './counterReduce';
import authReducer, { formReducer } from './authReducer';

const allReducers = combineReducers({
     counter: counterReducer,
     auth: authReducer,
     form: formReducer
})

export default allReducers;

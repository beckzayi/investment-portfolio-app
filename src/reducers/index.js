import { combineReducers } from 'redux';
import sharesReducer from './sharesReducer';
import balanceReducer from './balanceReducer';
import selectedShareReducer from './selectedShareReducer';
import ordersReducer from './ordersReducer';

const rootReducers = combineReducers({
	shares: sharesReducer,
	balance: balanceReducer,
	selectedShare: selectedShareReducer,
	orders: ordersReducer
});

export default rootReducers;

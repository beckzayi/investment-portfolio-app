import { REAL_API_RECEIVE_SINGLE_SHARE } from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case REAL_API_RECEIVE_SINGLE_SHARE:
			return action.payload;
		default:
			return state;
	}
}

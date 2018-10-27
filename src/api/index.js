/*
 * The place to define api connection
 */

import fakeDatabase from './database';

// Pretend requesting data with delay
const delay = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// Fetch share list from fake database with 300ms delay.
export const apiFetchShares = (symbol) => {
	return delay(300).then(() => {
		const { shares } = fakeDatabase;

		if (symbol) {
			return shares.filter(share => {
				if (share.symbol.toLowerCase().includes(symbol.trim().toLowerCase())) {
					return true;
				}
				return false;
			});
		}

		return shares;
	});
}

// Fetch a single share by symbol from fake database with 300ms delay.
export const apiFetchShareBySymbol = (symbol) => {
	return delay(300).then(() => {
		return fakeDatabase.shares.find(share => share.symbol.toLowerCase() === symbol.toLowerCase());
	});	
}

// apiFetchBalance() is not in use in this case.
// export const apiFetchBalance = () => {
// 	return delay(300).then(() => {
// 		return fakeDatabase.balance;
// 	});
// }

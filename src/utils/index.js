/**
 * Formats a number using fixed-point notation with 2 digits.
 * i.e. return 12.34 and 20.00
 */
export function formatNumber(value) {
	return Number.parseFloat(value).toFixed(2);
}

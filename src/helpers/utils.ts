import { ComponentType } from 'react';

/**
 * Return properties of the passed react component
 *
 * @param component
 * @returns
 */
export function getReactComponentProps<Props>(
	_MyComponent: ComponentType<Props>,
): Props {
	return {} as unknown as Props;
}

/**
 * Test if the passed value is empty
 *
 * @param data Date to pass
 * @returns
 */
export function isEmpty(data: unknown) {
	switch (typeof data) {
		case 'object':
			for (const prop in data) {
				if (data.hasOwnProperty(prop)) {
					return false;
				}
			}
			return JSON.stringify(data) === JSON.stringify({}) || data === null;

		case 'string':
			return !data && !data.trim().length && data != null;

		case 'number':
			return !data && !isNaN(data);

		case 'boolean':
			return !data;

		default:
			return true;
	}
}

/**
 * Test if the passed object has none-empty fields
 *
 * @param {object} object Object that will be tested
 * @param {string[]} except fields that will be excepted
 * @description Function that will test Object items one by one & return an object of empty fields
 * @returns Array
 */
export function testObjectItem(
	object: { [key: string]: unknown },
	except: string[] = [],
) {
	if (typeof object !== 'object') {
		return console.warn('This function require a object');
	}

	const arrayKey = [];

	for (const key in object) {
		if (Object.hasOwnProperty.call(object, key)) {
			if (isEmpty(object[key]) && except.includes(key)) {
				arrayKey.push(key);
			}
		}
	}
	return arrayKey;
}

/**
 * Return an `s` if the passed length is > 1
 *
 * @param length
 * @returns
 */
export function plural(length: number) {
	if (length > 1) {
		return 's';
	} else {
		return '';
	}
}

/**
 * Format native date
 *
 * @param date
 * @returns
 */
export function formatNativeDate(date = '') {
	const d = new Date(date);
	let month = '' + (d.getMonth() + 1);
	let day = '' + d.getDate();
	const year = d.getFullYear();

	if (month.length < 2) {
		month = '0' + month;
	}
	if (day.length < 2) {
		day = '0' + day;
	}

	return [year, month, day].join('-');
}

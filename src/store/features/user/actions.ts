// TYPES
import { USER_SET, USER_CLEAN } from "./cases";

export function setUser(payload: object) {
	return {
		type: USER_SET,
		payload,
	};
}

export function cleanUser() {
	return {
		type: USER_CLEAN,
	};
}

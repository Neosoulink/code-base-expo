// CASES
import { USER_SET, USER_CLEAN } from "./cases";

// STATE
export const INITIAL_STATE = {};

// REDUCER
export default (
	state = INITIAL_STATE,
	action = { type: "", payload: () => {} }
) => {
	let new_state = state;

	switch (action.type) {
		case USER_SET:
			new_state = action.payload;
			break;

		case USER_CLEAN:
			new_state = INITIAL_STATE;
			break;

		default:
			break;
	}

	return new_state;
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// TYPES
import type { RootState } from '../../index';
import type {
	NavigationStateType,
	NavigationGroupType,
	RouteGroupType,
} from './types';

export const ROUTES_GROUPS: RouteGroupType = {
	APP: 'APP',
	LOADING: 'LOADING',
	BLANK: 'BLANK',
};
const initialState: NavigationStateType = {
	group: ROUTES_GROUPS.LOADING,
};

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setGroup: (state, action: PayloadAction<NavigationGroupType>) => {
			state.group = action.payload;
		},
	},
});

// ACTIONS
export const { setGroup } = navigationSlice.actions;

// SELECTORS
export const getGroup = (state: RootState) => state.navigation.group;

export default navigationSlice.reducer;

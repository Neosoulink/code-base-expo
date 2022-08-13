import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// TYPES
import { GroupNameType } from '../store/features/navigation/types';

// HELPERS
import { getReactComponentProps } from '../helpers/utils';

// STORE
import { useAppSelector } from '../hooks';
import { getGroup } from '../store/features/navigation';

// COMPONENTS
import SCREENS from '../screens/index';

// STYLES
import { GLOBAL_STYLE as GS } from '../assets/ts/styles';

// DATA
const Stack = createNativeStackNavigator();
const STACK_SCREEN = createNativeStackNavigator().Screen;
const STACK_SCREEN_PROPS = getReactComponentProps(STACK_SCREEN);
export const STACK_ROUTES_NAMES = {
	AUTHENTICATION: {
		SIGN_IN: 'STACK/SIGN_IN',
	},
	APP: {
		HOME: 'STACK/HOME',
	},
	BLANK: {
		BLANK_: 'STACK/BLANK_',
	},
	LOADING: {
		LOADING: 'STACK/LOADING',
	},
};
const STACK_ROUTES_GROUPS: StackScreenGroupType = {
	APP: [
		{
			name: STACK_ROUTES_NAMES.APP.HOME,
			component: SCREENS.HOME,
		},
	],
	BLANK: [
		{
			name: STACK_ROUTES_NAMES.BLANK.BLANK_,
			component: SCREENS.BLANK_,
		},
	],
	LOADING: [
		{
			name: STACK_ROUTES_NAMES.LOADING.LOADING,
			component: SCREENS.LOADING,
		},
	],
};

// LOCAL TYPES
export type StackScreenType = typeof STACK_SCREEN_PROPS;
export type StackScreenGroupType = {
	[name in GroupNameType]: StackScreenType[];
};

const StackNavigator = ({}) => {
	// SELECTORS
	const CURRENT_ROUTE_GROUP = useAppSelector(getGroup);

	const Routes = () => {
		const safeGroup = CURRENT_ROUTE_GROUP || 'BLANK';

		return (
			<>
				{STACK_ROUTES_GROUPS[safeGroup].map((stackScreenProps, id) => (
					<Stack.Screen key={id} {...stackScreenProps} />
				))}
			</>
		);
	};

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					presentation: 'card',
					contentStyle: GS.bgTransparent,
				}}>
				{Routes()}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default StackNavigator;

import React from 'react';
import {
	StackScreenProps,
	createStackNavigator,
} from '@react-navigation/stack';

// TYPES
import type { GroupNameType } from '~store/features/navigation/types';

// HELPERS
import { getReactComponentProps } from '~helpers/utils';
import HomeScreen from 'src/screens/Home.screen';

// COMPONENTS

// LOCAL TYPES
export type AppStackParamList = {
	'APP_STACK/HOME': undefined;
};
export type AppStackScreenProps<T extends keyof AppStackParamList> =
	StackScreenProps<AppStackParamList, T>;
export type StackScreenType = typeof STACK_SCREEN_PROPS;
export type StackScreenGroupType = {
	[key in GroupNameType]: StackScreenType[];
};

// LOCAL COMPONENTS
const Stack = createStackNavigator<AppStackParamList>();

// DATA
const STACK_SCREEN_PROPS = getReactComponentProps(Stack.Screen);
export const APP_STACK_ROUTES_NAMES: {
	[key in keyof AppStackParamList]: StackScreenType;
} = {
	'APP_STACK/HOME': {
		name: 'APP_STACK/HOME',
		component: HomeScreen,
	},
};

const AppNavigator = ({}) => {
	// FUNCTIONS
	const Routes = () => {
		const SCREENS_KEYS = Object.keys(
			APP_STACK_ROUTES_NAMES,
		) as (keyof typeof APP_STACK_ROUTES_NAMES)[];

		return (
			<>
				{SCREENS_KEYS.map((key, id) => (
					<Stack.Screen key={id} {...APP_STACK_ROUTES_NAMES[key]} />
				))}
			</>
		);
	};

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				presentation: 'card',
			}}>
			{Routes()}
		</Stack.Navigator>
	);
};

export default AppNavigator;

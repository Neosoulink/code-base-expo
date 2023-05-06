import React from 'react';

// HELPERS
import { useBackButtonHandler } from '~helpers/navigation';

// HOOKS
import useReduxSelector from '~hooks/useReduxSelector';

// STORE
import { currentRouteGroup } from '~store/features/navigation';

// COMPONENTS
import BlankScreen from '~screens/Blank.screen';
import LoadingScreen from '~screens/Loading.screen';
import AppNavigator, { APP_STACK_ROUTES_NAMES } from './AppStackNavigator';

export interface Props {}

export const AVAILABLE_ROUTES = [...Object.keys(APP_STACK_ROUTES_NAMES)];

const Router: React.FC<Props> = ({}) => {
	// SELECTORS
	const CURRENT_ROUTE_GROUP = useReduxSelector(currentRouteGroup);

	// OTHER HOOKS
	useBackButtonHandler(routeName => AVAILABLE_ROUTES.includes(routeName));

	return CURRENT_ROUTE_GROUP === 'LOADING' ? (
		<LoadingScreen />
	) : CURRENT_ROUTE_GROUP === 'APP' ? (
		<AppNavigator />
	) : (
		<BlankScreen />
	);
};

export default Router;

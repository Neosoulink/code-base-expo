import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// HOOKS
import { useAppSelector, useAppDispatch } from "../store/hooks";

// ACTIONS & SELECTORS
import { getGroup as getNavGroup } from "../store/features/navigation/slice";

// CONSTANTS
import NAV_GROUPS from "../store/features/navigation/groups";

// SCREENS
import SCREENS from "../screens";

const Stack = createNativeStackNavigator();

// NAVIGATION COMPONENT
const Router = ({}) => {
	// SELECTORS
	const currentNavGroup = useAppSelector(getNavGroup);

	// EFFECTS
	React.useEffect(() => {
		setTimeout(() => {}, 2000);
		return () => {};
	}, []);

	const Routes = () => {
		if (currentNavGroup === NAV_GROUPS.LOADING) {
			return <Stack.Screen name="Stack/Loading" component={SCREENS.Loading} />;
		} else if (currentNavGroup === NAV_GROUPS.APP) {
			return <Stack.Screen name="Stack/Main" component={SCREENS.Home} />;
		} else {
			return <Stack.Screen name="Stack/Blank_" component={SCREENS.Blank_} />;
		}
	};

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					presentation: "card",
				}}
				defaultScreenOptions={{ presentation: "card" }}
			>
				{Routes()}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;
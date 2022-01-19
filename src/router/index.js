import React from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import SCREENS from "../screens";

const Stack = createStackNavigator();

// NAVIGATION COMPONENT
const Router = ({
	currentRouteGroup,
	groupLoading = null,
	showWelcome = false,
}) => {
	// EFFECTS
	React.useEffect(() => {
		setTimeout(() => {}, 2000);
		return () => {};
	}, []);

	// LOCAL COMPONENTS
	const RouterRoutes = () => {
		if (groupLoading) {
			return <Stack.Screen name="Stack/Loading" component={SCREENS.Loading} />;
		} else if (showWelcome || currentRouteGroup === routeGroupList.App) {
			return <Stack.Screen name="Stack/Main" component={SCREENS.Main} />;
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
					headerMode: "screen",
				}}
				defaultScreenOptions={{ presentation: "card" }}
			>
				{RouterRoutes()}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		currentRouteGroup: currentRouteGroup(state),
		groupLoading: isLoading(state),
		showWelcome: showWelcome(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);

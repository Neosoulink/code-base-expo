import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

// COMPONENTS
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

// STYLES
import { CONSTANT_COLOR as CC, GLOBAL_STYLE as GS } from "../assets/ts/styles";

function HomeScreen({}) {
	return (
		<View style={{ ...GS.screen, ...GS.centered }}>
			<FocusAwareStatusBar
				translucent={true}
				backgroundColor="transparent"
				barStyle="light-content"
			/>
			<Text>Welcome to your new app build with </Text>
			<Text>Typescript / Expo / Paper / React Navigation / Redux </Text>
		</View>
	);
}

export default HomeScreen;

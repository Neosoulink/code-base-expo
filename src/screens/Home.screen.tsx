import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

// COMPONENTS
import FocusAwareStatusBar from '~components/common/FocusAwareStatusBar';

// STYLES
import { GLOBAL_STYLE as GS } from '../assets/ts/styles';

function HomeScreen({}) {
	return (
		<View style={{ ...GS.screen, ...GS.centeredItems }}>
			<FocusAwareStatusBar
				translucent={true}
				backgroundColor="transparent"
				barStyle="dark-content"
			/>
			<Text>Welcome to your new app build with</Text>
			<Text>Typescript / Expo / Paper / React Navigation / Redux</Text>
		</View>
	);
}

export default HomeScreen;

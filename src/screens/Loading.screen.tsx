import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// COMMONS
import { FocusAwareStatusBar } from '../components/Common';

// STYLES
import { GLOBAL_STYLE as GS } from '../assets/ts/styles';

export default ({}) => (
	<View style={{ ...GS.screen, ...GS.centered }}>
		<FocusAwareStatusBar
			barStyle='dark-content'
			translucent={true}
			backgroundColor='transparent'
		/>

		<ActivityIndicator size='large' />
	</View>
);

import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// COMMONS
import FocusAwareStatusBar from '~components/common/FocusAwareStatusBar';

// STYLES
import { GLOBAL_STYLE as GS } from '~styles';

export default ({}) => (
	<View style={{ ...GS.screen, ...GS.centeredItems }}>
		<FocusAwareStatusBar
			barStyle="dark-content"
			translucent={true}
			backgroundColor="transparent"
		/>

		<ActivityIndicator size="large" />
	</View>
);

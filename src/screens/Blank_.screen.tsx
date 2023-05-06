import React from 'react';
import { View, BackHandler, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { version, name } from '../../package.json';

// COMPONENTS
import { FocusAwareStatusBar } from '../components/commons';

// STYLES
import { CONSTANT_COLOR as CC, GLOBAL_STYLE as GS } from '../assets/ts/styles';

export default function Blank_Screen() {
	const STYLES = StyleSheet.create({
		content: {
			...GS.centeredItems,
			...GS.px4,
			flex: 1,
		},
		deadIcon: { ...GS.mb3, fontSize: 40 },
		somethingWrong: {
			...GS.txtCenter,
			...GS.mb2,
			color: CC.muted,
			fontSize: 16,
		},
		footer: { ...GS.py2, ...GS.px4, alignItems: 'flex-end' },
		footerCopyright: {
			...GS.txtCenter,
			color: CC.muted,
			fontSize: 12,
		},
	});
	return (
		<View style={{ ...GS.screen }}>
			<FocusAwareStatusBar
				barStyle='dark-content'
				translucent={true}
				backgroundColor='transparent'
			/>

			<View style={STYLES.content}>
				<Text style={STYLES.deadIcon}>☹</Text>
				<Text style={STYLES.somethingWrong}>Something wrong</Text>
				<Button
					mode='text'
					uppercase={false}
					onPress={() => BackHandler.exitApp()}>
					Close app
				</Button>
			</View>
			<View style={STYLES.footer}>
				<Text style={STYLES.footerCopyright}>
					{name} - v{version}
				</Text>
			</View>
		</View>
	);
}

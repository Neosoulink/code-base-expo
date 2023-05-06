import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

// STYLES
import { GLOBAL_STYLE as GS } from '../../assets/ts/styles';

export interface Props {
	spaceSize?: 'sm' | 'md' | 'lg';
	viewProps?: ViewProps;
	children?: React.ReactNode;
}

const Container: React.FC<Props> = ({
	spaceSize = 'md',
	viewProps = {},
	children,
}) => {
	// DATA
	let _spaceSize: object;

	switch (spaceSize) {
		case 'sm':
			_spaceSize = {
				...GS.px2,
				...GS.mx2,
			};
			break;

		case 'md':
			_spaceSize = {
				...GS.px4,
				...GS.mx3,
			};
			break;

		case 'lg':
			_spaceSize = {
				...GS.px5,
				...GS.mx5,
			};
			break;
	}
	const CUSTOM_STYLE = viewProps?.style ? (viewProps.style as object) : {};
	const STYLES = StyleSheet.create({
		main: {
			...CUSTOM_STYLE,
			..._spaceSize,
		},
	});

	return (
		<View {...viewProps} style={STYLES.main}>
			{children}
		</View>
	);
};

export default Container;

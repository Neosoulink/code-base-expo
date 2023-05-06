import React from 'react';
import { View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

// CONSTANTS
import { PAPER_THEME } from './Paper';

// STYLES
import { GLOBAL_STYLE as GS } from '@styles';

// LOCAL TYPES
export type NavigationThemeType = typeof DefaultTheme;
export interface Props {}

// DATA
export const NAVIGATION_THEME: NavigationThemeType = {
	...DefaultTheme,
	...PAPER_THEME,
	colors: {
		...DefaultTheme.colors,
		background: PAPER_THEME.colors.background,
		border: PAPER_THEME.colors.backdrop,
		card: PAPER_THEME.colors.surface,
		notification: PAPER_THEME.colors.notification,
		primary: PAPER_THEME.colors.primary,
		text: PAPER_THEME.colors.text,
	},
	dark: PAPER_THEME.dark,
};

const RouterProvider: React.FC<React.PropsWithChildren<Props>> = (props) => (
	<View
		style={{
			...GS.w100,
			...GS.h100,
		}}>
		<NavigationContainer theme={NAVIGATION_THEME}>
			{props.children}
		</NavigationContainer>
	</View>
);

export default RouterProvider;

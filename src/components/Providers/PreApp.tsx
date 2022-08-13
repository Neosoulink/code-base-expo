import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

// HOOKS
import { useCachedResources } from '../../hooks';

// LOCAL TYPES
export interface Props {
	children: React.ReactElement<unknown>;
}

const PreAppProvider: React.FC<Props> = (props) => {
	// HOOKS
	const appIsReady = useCachedResources();

	// FUNCTIONS
	const onLayoutRoot = React.useCallback(async () => {
		if (appIsReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<SafeAreaProvider onLayout={onLayoutRoot}>
			{props.children}
		</SafeAreaProvider>
	);
};

export default PreAppProvider;

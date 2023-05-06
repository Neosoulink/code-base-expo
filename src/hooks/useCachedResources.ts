import { useEffect, useState } from 'react';
import FeatherIcon from '@expo/vector-icons/Feather';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

/**
 * Hooks that provide a boolean to indicate that resource has been loaded
 */
export default function useCachedResources(): boolean {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				// Load fonts
				await Font.loadAsync({
					...FeatherIcon.font,
					'Nunito-ExtraLight': require('../assets/fonts/Nunito/Nunito-ExtraLight.ttf'),
					'Nunito-Light': require('../assets/fonts/Nunito/Nunito-Light.ttf'),
					'Nunito-Regular': require('../assets/fonts/Nunito/Nunito-Regular.ttf'),
					'Nunito-SemiBold': require('../assets/fonts/Nunito/Nunito-SemiBold.ttf'),
					'Nunito-Bold': require('../assets/fonts/Nunito/Nunito-Bold.ttf'),
					'Nunito-Black': require('../assets/fonts/Nunito/Nunito-Black.ttf'),
				});
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}

import { useEffect, useState } from 'react';
import {
	ColorSchemeName,
	useColorScheme as _useColorScheme,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// STORE
import type { RootState, AppDispatch } from './store';

/**
 * Hooks that provide a boolean to indicate that resource has been loaded
 */
export function useCachedResources(): boolean {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				// Load fonts
				await Font.loadAsync({
					...FeatherIcon.font,
					'Nunito-ExtraLight': require('./assets/fonts/Nunito/Nunito-ExtraLight.ttf'),
					'Nunito-Light': require('./assets/fonts/Nunito/Nunito-Light.ttf'),
					'Nunito-Regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
					'Nunito-SemiBold': require('./assets/fonts/Nunito/Nunito-SemiBold.ttf'),
					'Nunito-Bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
					'Nunito-Black': require('./assets/fonts/Nunito/Nunito-Black.ttf'),
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

/**
 * The useColorScheme value is always either light or dark, but the built-in
 * type suggests that it can be null. This will not happen in practice, so this
 * makes it a bit easier to work with.
 *
 * A new useColorScheme hook is provided as the preferred way of
 * accessing the user's preferred color scheme (aka Dark Mode).
 *
 */
export function useColorScheme(): NonNullable<ColorSchemeName> {
	return _useColorScheme() as NonNullable<ColorSchemeName>;
}

/**
 * Redux dispatcher based on the app store
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Redux selector based on the app store
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

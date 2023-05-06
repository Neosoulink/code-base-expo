import {
	ColorSchemeName,
	useColorScheme as _useColorScheme,
} from 'react-native';

/**
 * The useColorScheme value is always either light or dark, but the built-in
 * type suggests that it can be null. This will not happen in practice, so this
 * makes it a bit easier to work with.
 *
 * A new useColorScheme hook is provided as the preferred way of
 * accessing the user's preferred color scheme (aka Dark Mode).
 *
 */
export default function useColorScheme(): NonNullable<ColorSchemeName> {
	return _useColorScheme() as NonNullable<ColorSchemeName>;
}

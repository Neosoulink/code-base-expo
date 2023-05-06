import React from 'react';
import { setCustomTextInput, setCustomText } from 'react-native-global-props';

// HOOKS
import { useAppDispatch } from '../../hooks';

// STORE
import { ROUTES_GROUPS, setGroup } from '../../store/features/navigation';

// STYLES
import { PAPER_THEME } from './Paper';

// LOCAL TYPES
export interface Props {
	children: React.ReactElement<unknown>;
}

const AppProvider: React.FC<Props> = (props) => {
	// DISPATCHER
	const dispatch = useAppDispatch();

	// EFFECTS
	// Set local user and default route group
	React.useEffect(() => {
		setTimeout(() => {
			dispatch(setGroup(ROUTES_GROUPS.APP));
		}, 2000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Set default config for react-native components
	React.useEffect(() => {
		setCustomTextInput({
			style: {
				...PAPER_THEME.fonts.regular,
				color: PAPER_THEME.colors.text,
			},
		});

		setCustomText({
			style: {
				...PAPER_THEME.fonts.regular,
				color: PAPER_THEME.colors.text,
			},
		});
	}, []);

	return props.children;
};

export default AppProvider;

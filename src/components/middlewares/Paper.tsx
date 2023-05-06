import React from 'react';
import { DefaultTheme, Provider } from 'react-native-paper';

// TYPES
import type { IconProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import { IconPropsType } from '../commons/Icon';

// COMPONENTS
import { Icon } from '../commons';

// STYLES
import {
	CONSTANT_COLOR as CC,
	GLOBAL_STYLE as GS,
	CONSTANT_SIZE as CS,
} from '../../assets/ts/styles';

// LOCAL TYPES
export interface Props {
	children: React.ReactElement<unknown>;
}
export type PaperThemeType = typeof DefaultTheme;

export const PAPER_THEME: PaperThemeType = {
	...DefaultTheme,
	dark: false,
	mode: 'adaptive',
	roundness: CS.SPACE_SM - 2,
	colors: {
		...DefaultTheme.colors,
		primary: CC.info,
		accent: CC.primaryHightLight,
		background: CC.white,
		surface: CC.light,
		onSurface: CC.mutedHighLight,
		disabled: CC.mutedLight,
		text: CC.dark,
		placeholder: CC.mutedLight,
		error: CC.danger,
	},
	fonts: {
		thin: GS.FF_NunitoExtraLight,
		light: GS.FF_NunitoLight,
		regular: GS.FF_Nunito,
		medium: GS.FF_NunitoSemiBold,
	},
};

const PaperIcon = (iconProps: IconProps) => (
	<Icon
		name={iconProps.name as IconPropsType['name']}
		size={iconProps.size}
		color={iconProps.color}
	/>
);

const PaperProvider: React.FC<Props> = (props) => (
	<Provider theme={PAPER_THEME} settings={{ icon: PaperIcon }}>
		{props.children}
	</Provider>
);

export default PaperProvider;

import React from 'react';

// COMPONENTS
import Icon, { IconNameType } from './Icon';

export interface Props {
	name: IconNameType;
	size: number;
	color: string;
}

const FabIcon: React.FC<Props> = (props) => (
	<Icon name={props.name} size={props.size} color={props.color} />
);

export default FabIcon;

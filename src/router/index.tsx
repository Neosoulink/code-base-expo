import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// COMPONENTS
import StackNavigator from './StackNavigator';

export interface Props {}

const Router: React.FC<Props> = ({}) => (
	<NavigationContainer>
		<StackNavigator />
	</NavigationContainer>
);

export default Router;

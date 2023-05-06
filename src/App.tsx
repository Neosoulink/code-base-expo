import 'react-native-gesture-handler';
import React from 'react';

// ROUTER
import Router from './router';

// COMPONENTS
import PreAppProvider from './components/providers/PreApp';
import ReduxProvider from './components/providers/Redux';
import PaperProvider from './components/providers/Paper';
import AppProvider from './components/providers/App';

export default function App() {
	return (
		<PreAppProvider>
			<ReduxProvider>
				<PaperProvider>
					<AppProvider>
						<Router />
					</AppProvider>
				</PaperProvider>
			</ReduxProvider>
		</PreAppProvider>
	);
}

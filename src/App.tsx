import 'react-native-gesture-handler';
import React from 'react';

// ROUTER
import Router from './router';

// COMPONENTS
import PreAppProvider from './components/Providers/PreApp';
import ReduxProvider from './components/Providers/Redux';
import PaperProvider from './components/Providers/Paper';
import AppProvider from './components/Providers/App';

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

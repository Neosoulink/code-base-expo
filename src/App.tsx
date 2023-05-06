import 'react-native-gesture-handler';
import React from 'react';

// ROUTER
import Router from './router';

// COMPONENTS
import PreAppProvider from './components/middlewares/PreApp';
import ReduxProvider from './components/middlewares/Redux';
import PaperProvider from './components/middlewares/Paper';
import AppProvider from './components/middlewares/App';

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

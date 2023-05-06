import 'react-native-gesture-handler';
import React from 'react';

// ROUTER
import Router from './router';

// COMPONENTS
import PreAppProvider from '~components/providers/PreApp';
import ReduxProvider from '~components/providers/Redux';
import PaperProvider from '~components/providers/Paper';
import AppProvider from '~components/providers/App';
import RouterProvider from '~components/providers/router';

export default function App() {
	return (
		<PreAppProvider>
			<ReduxProvider>
				<PaperProvider>
					<RouterProvider>
						<AppProvider>
							<Router />
						</AppProvider>
					</RouterProvider>
				</PaperProvider>
			</ReduxProvider>
		</PreAppProvider>
	);
}

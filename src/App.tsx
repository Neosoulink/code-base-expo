import React from "react";
import { Provider } from "react-redux";
import Icon from "@expo/vector-icons/AntDesign";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { setCustomTextInput, setCustomText } from "react-native-global-props";

// STORE
import Store from "./store";

// ROUTER
import Router from "./router";

// STYLES
import { ConstantColor as CC, GlobalStyle as GS } from "./src/assets/js/style";

const theme = {
	...DefaultTheme,
	dark: false,
	mode: "adaptive",
	roundness: 4,
	colors: {
		...DefaultTheme.colors,
		primary: CC.primary,
		accent: CC.primaryLight,
		background: CC.light,
		surface: CC.white,
		text: CC.shelter,
		disabled: CC.grayHighLight,
		placeholder: CC.grayLight,
		error: CC.danger,
	},
};

setCustomTextInput({
	style: {},
});

setCustomText({
	style: {},
});

export default function App() {
	return (
		<Provider store={Store}>
			<PaperProvider
				theme={theme}
				settings={{ icon: (props) => <Icon {...props} /> }}
			>
				<Router />
			</PaperProvider>
		</Provider>
	);
}

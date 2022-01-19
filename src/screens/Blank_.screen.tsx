import React from "react";
import { View, BackHandler } from "react-native";
import { Text, Button } from "react-native-paper";
import { version, name } from "../../package.json";

// COMPONENTS
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

// STYLES
import { CONSTANT_COLOR as CC, GLOBAL_STYLE as GS } from "../assets/ts/styles";

export default function Blank_Screen() {
	return (
		<View style={{ ...GS.screen }}>
			<FocusAwareStatusBar
				barStyle="dark-content"
				translucent={true}
				backgroundColor="transparent"
			/>

			<View
				style={{
					...GS.centered,
					...GS.px4,
					flex: 1,
				}}
			>
				<Text
					style={{ ...GS.mb3, fontSize: 40 }}
					onPressIn={undefined}
					onPressOut={undefined}
					android_hyphenationFrequency={undefined}
				>
					☹
				</Text>
				<Text
					style={{
						...GS.txtCenter,
						...GS.mb2,
						color: CC.gray,
						fontSize: 16,
					}}
					onPressIn={undefined}
					onPressOut={undefined}
					android_hyphenationFrequency={undefined}
				>
					Something wrong
				</Text>
				<Button
					mode="text"
					uppercase={false}
					onPress={() => BackHandler.exitApp()}
				>
					Close app
				</Button>
			</View>
			<View style={{ ...GS.py2, ...GS.px4, alignItems: "flex-end" }}>
				<Text
					style={{
						...GS.txtCenter,
						color: CC.gray,
						fontSize: 12,
					}}
					onPressIn={undefined}
					onPressOut={undefined}
					android_hyphenationFrequency={undefined}
				>
					{name} - v{version}
				</Text>
			</View>
		</View>
	);
}

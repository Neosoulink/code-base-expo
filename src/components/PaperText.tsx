import React from "react";
import { Text } from "react-native-paper";

const PaperText = (props: any) => (
	<Text
		{...{ ...props }}
		onPressIn={undefined}
		onPressOut={undefined}
		android_hyphenationFrequency={undefined}
	/>
);

export default PaperText;

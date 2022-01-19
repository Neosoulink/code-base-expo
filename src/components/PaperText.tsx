import React from "react";
import { Text } from "react-native-paper";

type PaperTextType = typeof Text.propTypes;

const PaperText = (props: PaperTextType) => (
	<Text
		{...{ ...props }}
		onPressIn={undefined}
		onPressOut={undefined}
		android_hyphenationFrequency={undefined}
	>
		{props?.children}
	</Text>
);

export default PaperText;

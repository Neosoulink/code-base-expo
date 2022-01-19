import React from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

// STYLES
import {
	ConstantColor as CC,
	GlobalStyle as GS
} from '../assets/js/style';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

export default ({ }) => {
	// STATES
	const [animation, setAnimation] = React.useState(new Animated.Value(0));

	// DATA
	const interpolated = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [0.3, 1],
	});

	const animatedStyle = {
		...GS.w100,
		...GS.h100,
		opacity: interpolated,
	};

	// EFFECTS
	React.useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(
					animation,
					{
						toValue: 1,
						duration: (1200),
						easing: Easing.linear(),
						useNativeDriver: false,
					}
				),
				Animated.timing(
					animation,
					{
						toValue: 0,
						duration: (1200),
						easing: Easing.linear(),
						useNativeDriver: false,
					}
				)
			])
		).start();
		return () => { }
	}, [])

	return (
		<View style={{ ...GS.screen, ...GS.centered }}>
			<FocusAwareStatusBar
				barStyle="light-content"
				translucent={true}
				backgroundColor="transparent"
			/>

			<View style={styles.main} >
				<Animated.Image
					source={require("../assets/img/appIcons/splash.png")}
					resizeMode="contain"
					style={animatedStyle}
				/>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		...GS.screen,
		...GS.centered,
		...GS.bgPrimary,
		...GS.w100,
		...GS.h100,
	},
	titleLogo: {
		...GS.pt5,
		fontSize: 60,
		fontWeight: 'bold',
		textAlign: 'center',
		color: CC.light
	},
	subTitleLogo: {
		fontSize: 18,
		textAlign: 'center',
		color: CC.light,
		lineHeight: 40
	}
})


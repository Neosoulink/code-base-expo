import { StyleSheet, Dimensions, Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const CONSTANT_SIZE = {
	FONT_SIZE_SM: 11,
	FONT_SIZE: 14,
	FONT_SIZE_MD: 17,
	FONT_SIZE_LG: 20,
	FONT_SIZE_XLG: 23,
	NO_SPACE: 0,
	SPACE_SM: 8,
	SPACE: 16,
	SPACE_MD: 24,
	SPACE_LG: 32,
	SPACE_XLG: 40,
	BOTTOM_NAVBAR_HEIGHT: 80,
	STATUS_BAR_HEIGHT: 24,
	SCREEN_HEIGHT: Dimensions.get('screen').height,
	SCREEN_WIDTH: Dimensions.get('screen').width,
	WINDOW_HEIGHT: Dimensions.get('window').height,
	WINDOW_WIDTH: Dimensions.get('window').width,
};

export const CONSTANT_COLOR = {
	primary: '#fff',
	primaryLight: '#fff',
	primaryHightLight: '#fff',
	secondary: '#fff',
	secondaryLight: '#fff',
	secondaryHighLight: '#fff',
	muted: '#8f96a7',
	mutedLight: '#b3bbce',
	mutedHighLight: '#dce3f4',

	light: '#fcfdff',
	dark: '#0C2146',
	info: '#2979FF',
	success: '#43A047',
	danger: '#F44336',
	warning: '#FB8200',
	white: '#FFFFFF',
	input: '#edeef2',
	transparent: 'transparent',
};

export const GLOBAL_STYLE = StyleSheet.create({
	FF_NunitoExtraLight: {
		fontFamily: 'Nunito-ExtraLight',
	},
	FF_NunitoLight: {
		fontFamily: 'Nunito-Light',
	},
	FF_Nunito: {
		fontFamily: 'Nunito-Regular',
	},
	FF_NunitoSemiBold: {
		fontFamily: 'Nunito-SemiBold',
	},
	FF_NunitoBold: {
		fontFamily: 'Nunito-Bold',
	},
	FF_NunitoBlack: {
		fontFamily: 'Nunito-Black',
	},
	screen: {
		flex: 1,
		backgroundColor: CONSTANT_COLOR.white,
	},
	screenStatic: {
		height: CONSTANT_SIZE.SCREEN_HEIGHT,
		backgroundColor: CONSTANT_COLOR.primary,
	},
	screenStaticNav: {
		flex: 1,
		marginBottom: CONSTANT_SIZE.BOTTOM_NAVBAR_HEIGHT,
		backgroundColor: CONSTANT_COLOR.primary,
	},
	bgPrimary: {
		backgroundColor: CONSTANT_COLOR.primary,
	},
	bgPrimaryLight: {
		backgroundColor: CONSTANT_COLOR.primaryLight,
	},
	bgLight: {
		backgroundColor: CONSTANT_COLOR.light,
	},
	bgInfo: {
		backgroundColor: CONSTANT_COLOR.info,
	},
	bgSuccess: {
		backgroundColor: CONSTANT_COLOR.success,
	},
	bgDanger: {
		backgroundColor: CONSTANT_COLOR.danger,
	},
	bgWarning: {
		backgroundColor: CONSTANT_COLOR.warning,
	},
	bgTransparent: {
		backgroundColor: 'transparent',
	},
	txtXlg: {
		fontFamily: 'Nunito-Bold',
		fontSize: CONSTANT_SIZE.FONT_SIZE_XLG,
	},
	txtLg: {
		fontFamily: 'Nunito-Bold',
		fontSize: CONSTANT_SIZE.FONT_SIZE_LG,
	},
	txtMd: {
		fontFamily: 'Nunito-Bold',
		fontSize: CONSTANT_SIZE.FONT_SIZE_MD,
	},
	txtSm: {
		fontSize: CONSTANT_SIZE.FONT_SIZE_SM,
	},
	txtPrimary: {
		color: CONSTANT_COLOR.primary,
	},
	txtPrimaryLight: {
		color: CONSTANT_COLOR.primaryLight,
	},
	txtInfo: {
		color: CONSTANT_COLOR.info,
	},
	txtSuccess: {
		color: CONSTANT_COLOR.success,
	},
	txtDanger: {
		color: CONSTANT_COLOR.danger,
	},
	txtWarning: {
		color: CONSTANT_COLOR.warning,
	},
	txtCenter: {
		textAlign: 'center',
	},
	txtJustify: {
		textAlign: 'justify',
	},
	txtLeft: {
		textAlign: 'left',
	},
	txtRight: {
		textAlign: 'right',
	},
	txtAuto: {
		textAlign: 'auto',
	},
	txtUpper: {
		textTransform: 'uppercase',
	},
	txtLower: {
		textTransform: 'lowercase',
	},
	txtCapitalize: {
		textTransform: 'capitalize',
	},
	fontBold: {
		fontWeight: 'bold',
	},
	fontItalic: {
		fontStyle: 'italic',
	},
	container: {
		marginHorizontal: CONSTANT_SIZE.SPACE,
		paddingHorizontal: CONSTANT_SIZE.SPACE,
	},
	w100: {
		width: '100%',
	},
	w75: {
		width: '75%',
	},
	w50: {
		width: '50%',
	},
	w25: {
		width: '25%',
	},
	h100: {
		height: '100%',
	},
	h75: {
		height: '75%',
	},
	h50: {
		height: '50%',
	},
	h25: {
		height: '25%',
	},
	m0: {
		margin: 0,
	},
	m1: {
		margin: 5,
	},
	m2: {
		margin: 10,
	},
	m3: {
		margin: 15,
	},
	m4: {
		margin: 20,
	},
	m5: {
		margin: 25,
	},
	mt0: {
		marginTop: 0,
	},
	mt1: {
		marginTop: 5,
	},
	mt2: {
		marginTop: 10,
	},
	mt3: {
		marginTop: 15,
	},
	mt4: {
		marginTop: 20,
	},
	mt5: {
		marginTop: 25,
	},
	mb0: {
		marginBottom: 0,
	},
	mb1: {
		marginBottom: 5,
	},
	mb2: {
		marginBottom: 10,
	},
	mb3: {
		marginBottom: 15,
	},
	mb4: {
		marginBottom: 20,
	},
	mb5: {
		marginBottom: 25,
	},
	ml0: {
		marginLeft: 0,
	},
	ml1: {
		marginLeft: 5,
	},
	ml2: {
		marginLeft: 10,
	},
	ml3: {
		marginLeft: 15,
	},
	ml4: {
		marginLeft: 20,
	},
	ml5: {
		marginLeft: 25,
	},
	mr0: {
		marginRight: 0,
	},
	mr1: {
		marginRight: 5,
	},
	mr2: {
		marginRight: 10,
	},
	mr3: {
		marginRight: 15,
	},
	mr4: {
		marginRight: 20,
	},
	mr5: {
		marginRight: 25,
	},
	my0: {
		marginVertical: 0,
	},
	my1: {
		marginVertical: 5,
	},
	my2: {
		marginVertical: 10,
	},
	my3: {
		marginVertical: 15,
	},
	my4: {
		marginVertical: 20,
	},
	my5: {
		marginVertical: 25,
	},
	mx0: {
		marginHorizontal: 0,
	},
	mx1: {
		marginHorizontal: 5,
	},
	mx2: {
		marginHorizontal: 10,
	},
	mx3: {
		marginHorizontal: 15,
	},
	mx4: {
		marginHorizontal: 20,
	},
	mx5: {
		marginHorizontal: 25,
	},
	p0: {
		padding: 0,
	},
	p1: {
		padding: 5,
	},
	p2: {
		padding: 10,
	},
	p3: {
		padding: 15,
	},
	p4: {
		padding: 20,
	},
	p5: {
		padding: 25,
	},
	pt0: {
		paddingTop: 0,
	},
	pt1: {
		paddingTop: 5,
	},
	pt2: {
		paddingTop: 10,
	},
	pt3: {
		paddingTop: 15,
	},
	pt4: {
		paddingTop: 20,
	},
	pt5: {
		paddingTop: 25,
	},
	pb0: {
		paddingBottom: 0,
	},
	pb1: {
		paddingBottom: 5,
	},
	pb2: {
		paddingBottom: 10,
	},
	pb3: {
		paddingBottom: 15,
	},
	pb4: {
		paddingBottom: 20,
	},
	pb5: {
		paddingBottom: 25,
	},
	pl0: {
		paddingLeft: 0,
	},
	pl1: {
		paddingLeft: 5,
	},
	pl2: {
		paddingLeft: 10,
	},
	pl3: {
		paddingLeft: 15,
	},
	pl4: {
		paddingLeft: 20,
	},
	pl5: {
		paddingLeft: 25,
	},
	pr0: {
		paddingRight: 0,
	},
	pr1: {
		paddingRight: 5,
	},
	pr2: {
		paddingRight: 10,
	},
	pr3: {
		paddingRight: 15,
	},
	pr4: {
		paddingRight: 20,
	},
	pr5: {
		paddingRight: 25,
	},
	py0: {
		paddingVertical: 0,
	},
	py1: {
		paddingVertical: 5,
	},
	py2: {
		paddingVertical: 10,
	},
	py3: {
		paddingVertical: 15,
	},
	py4: {
		paddingVertical: 20,
	},
	py5: {
		paddingVertical: 25,
	},
	px0: {
		paddingHorizontal: 0,
	},
	px1: {
		paddingHorizontal: 5,
	},
	px2: {
		paddingHorizontal: 10,
	},
	px3: {
		paddingHorizontal: 15,
	},
	px4: {
		paddingHorizontal: 20,
	},
	px5: {
		paddingHorizontal: 25,
	},
	noShadow: {
		shadowColor: 'transparent',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 0,
		shadowOpacity: 0,
		elevation: 0,
	},
	shadowSm: {
		shadowColor: CONSTANT_COLOR.info,
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 5,
		shadowOpacity: 0.2,
		elevation: 2,
	},
	shadow: {
		shadowColor: CONSTANT_COLOR.info,
		shadowOffset: { width: 1, height: 1.5 },
		shadowRadius: 5,
		shadowOpacity: 0.5,
		elevation: 5,
	},
	shadowLg: {
		shadowColor: isIOS ? '#000' : CONSTANT_COLOR.info,
		shadowOffset: {
			width: isIOS ? 0 : 2,
			height: 2,
		},
		shadowOpacity: isIOS ? 0.25 : 0.7,
		shadowRadius: isIOS ? 3.84 : 5,

		elevation: 8.5,
	},
	rounded0: {
		borderRadius: 0,
	},
	roundedSm: {
		borderRadius: 5,
	},
	rounded: {
		borderRadius: 10,
	},
	roundedMd: {
		borderRadius: 20,
	},
	roundedLg: {
		borderRadius: 30,
	},
	noBorder: {
		borderColor: 'transparent',
		borderWidth: 0,
	},
	borderSm: {
		borderColor: CONSTANT_COLOR.muted,
		borderWidth: 0.5,
	},
	border: {
		borderColor: CONSTANT_COLOR.muted,
		borderWidth: 1,
	},
	borderMd: {
		borderColor: CONSTANT_COLOR.muted,
		borderWidth: 2,
	},
	borderLg: {
		borderColor: CONSTANT_COLOR.muted,
		borderWidth: 4,
	},
	separator: {
		borderTopColor: CONSTANT_COLOR.muted,
		borderTopWidth: 1,
		marginVertical: 10,
		padding: 0,
	},
	overlay: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.3)',
	},
	positionAbsolute: {
		position: 'absolute',
	},
	positionRelative: {
		position: 'relative',
	},
	positionReset: {
		position: undefined,
	},
	t0: {
		top: 0,
	},
	b0: {
		bottom: 0,
	},
	l0: {
		left: 0,
	},
	r0: {
		right: 0,
	},
	th: {
		height: 40,
		backgroundColor: CONSTANT_COLOR.light,
	},
	column: {
		flexDirection: 'column',
	},
	row: {
		flexDirection: 'row',
	},
	dFex: {
		display: 'flex',
	},
	dNone: {
		display: 'none',
	},
	alignBaseline: { alignItems: 'baseline' },
	alignCenter: { alignItems: 'center' },
	alignEnd: { alignItems: 'flex-end' },
	alignStart: { alignItems: 'flex-start' },
	alignStretch: { alignItems: 'stretch' },
	justifyCenter: { justifyContent: 'center' },
	justifyEnd: { justifyContent: 'flex-end' },
	justifyStart: { justifyContent: 'flex-start' },
	justifyAround: { justifyContent: 'space-around' },
	justifyBetween: { justifyContent: 'space-between' },
	justifyEvenly: { justifyContent: 'space-evenly' },
	inlinedItems: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	centeredItems: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	justifyContentBetween: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	flex1: {
		flex: 1,
	},
	flexWrap: {
		flexWrap: 'wrap',
	},
	coverImage: {
		flex: 1,
		height: undefined,
		width: undefined,
		resizeMode: 'cover',
	},
	textarea: {
		borderColor: CONSTANT_COLOR.mutedLight,
		borderWidth: 1,
		borderRadius: 5,
		overflow: 'hidden',
		height: 100,
	},
	overflowHidden: {
		overflow: 'hidden',
	},
	overflowScroll: {
		overflow: 'scroll',
	},
	overflowVisible: {
		overflow: 'visible',
	},
	zIndexBack: { zIndex: -1 },
	zIndexFront: { zIndex: 9999 },
	opacity0: { opacity: 0 },
	opacity25: { opacity: 0.25 },
	opacity50: { opacity: 0.5 },
	opacity75: { opacity: 0.75 },
	opacity100: { opacity: 1 },
});

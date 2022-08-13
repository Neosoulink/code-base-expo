export type GroupNameType = 'APP' | 'LOADING' | 'BLANK';
export type NavigationGroupType = GroupNameType | null;
export type RouteGroupType = {
	readonly [name in GroupNameType]: GroupNameType;
};
export interface NavigationStateType {
	group: GroupNameType | null;
}

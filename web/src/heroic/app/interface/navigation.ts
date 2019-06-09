export interface IParent {
	group: string,
	icon: string,
	text: string,
	children: Array<IChild>
}

export interface IChild {
	text: string,
	link: string
}

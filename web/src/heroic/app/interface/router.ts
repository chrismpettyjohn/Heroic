import {ComponentType} from "react";

export interface IState {
	ready: boolean,
	routes: Array<IRoute>
}

export interface IParent {
	guard: EGuard,
	prefix: string,
	routes: Array<IRoute>,
	component?: ComponentType,
	meta: {
		[key: string]: string
	}
}

export enum EGuard {
	Admin,
	Everyone,
	Guest,
	User
}

export interface IRoute {
	component: ComponentType
	guard?: EGuard,
	path: string,
	parent?: ComponentType,
	meta?: {
		[key: string]: string
	}
}

import React, {ComponentType} from "react";

export interface IState {
	ready: boolean,
	routes: Array<IRoute>
}

export interface IParent {
	guard: EGuard,
	extends: Array<EExtends>,
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

export enum EExtends {
	Header,
	Footer
}


export interface IRoute {
	component: ComponentType
	guard?: EGuard,
	extends?: Array<EExtends>,
	path: string,
	parent?: ComponentType,
	meta?: {
		[key: string]: string
	}
}

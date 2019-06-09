import React from "react";

export interface IState {
	ready: boolean,
	routes: Array<IRoute>
}

export interface IParent {
	guard: EGuard,
	extends: Array<EExtends>,
	prefix: string,
	routes: Array<IRoute>
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
	component: React.Component | React.ComponentClass | React.FunctionComponent,
	guard?: EGuard,
	extends?: Array<EExtends>,
	path: string
}

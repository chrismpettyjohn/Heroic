import {ComponentType} from 'react'
import {IGuard} from 'heroic/app/config/guards'

export interface IState {
	ready: boolean
	routes: Array<IRoute>
}

export interface IParent {
	guard: IGuard
	prefix: string
	routes: Array<IRoute>
	component?: ComponentType
	meta: {
		[key: string]: string
	}
}

export interface IRoute {
	component: ComponentType
	guard?: IGuard
	path: string
	parent?: ComponentType
	meta?: {
		[key: string]: string
	},
	title: string
}

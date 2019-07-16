import HTTP from "../server"

export default class Base {

	constructor () {
		this.initRoutes()
		HTTP.controllers++
	}

	initRoutes = async () => {
		this.routes().forEach((endpoint: Endpoint) => {
			HTTP.server[endpoint.type](calculatePath(this.prefix(), endpoint.path), endpoint.method)
		})
	}

	name(): string {
		throw new Error("Not implemented")
	}

	description(): string {
		throw new Error("Not Implemented")
	}

	middleware(): string[] {
		throw new Error("Not Implemented")
	}

	prefix(): string {
		throw new Error("Not Implemented")
	}

	routes(): Endpoint[] {
		throw new Error("Not implemented")
	}

}

export interface Endpoint {
	type: 'post' | 'patch' | 'put' | 'get' | 'delete'
	path: string
	method: (request: Express.Request, response: Express.Response) => Express.Response
}

export const calculatePath = (prefix: string, path: string) => {
	return `/${prefix}/${path}`
}

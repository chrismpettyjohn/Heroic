import Community from './community'

export default interface Pages {
	community: Community
}

export interface Page {
	data: any[],
	loaded: boolean
}

import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async (params) => {
	console.log({clientAddress:params.getClientAddress()});
};
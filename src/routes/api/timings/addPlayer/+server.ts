import { addPlayer } from '../../../../../$lib/server/database/timings/player';

export function GET(params) {
	console.log(params);
	return new Response('hello ' + params.url);
}

export async function POST({request}) {
	const data = await request.json();
	await addPlayer(data);
  return new Response('Timing Added')
}

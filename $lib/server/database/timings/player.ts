import { initMongoDB } from '../../helpers/initMongo';

const db = 'fun-customs';

type Player = {
	ign: string;
	hour: number;
	minute: number;
};

type PlayerDoc = Player & {
	_ts: Date;
	type: string;
};

export const addPlayer = async (player: Player) => {
	const client = await initMongoDB();
	return await client
		.db(db)
		.collection('timings')
		.insertOne({ ...player, _ts: new Date(), type: 'player' });
};

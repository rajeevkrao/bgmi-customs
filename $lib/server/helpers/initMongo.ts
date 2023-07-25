/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ServerApiVersion, MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';

let cache: any = null;

//Codes till here are executed once irrespective of n(n>0) numbers of imports to this file

export const initMongoDB = async () => {
	if (!cache)
		cache = new MongoClient(uri, {
			// @ts-ignore
			useNewUrlParser: true,
			// @ts-ignore
			useUnifiedTopology: true,
			socketTimeoutMS: 5000,
			maxConnecting: 1,
			serverApi: ServerApiVersion.v1
		});
	if (!cache?.topology) await cache.connect();
	return cache as MongoClient;
};

export const closeDB = async () => {
	await cache?.close();
	console.log('Client Closed');
};

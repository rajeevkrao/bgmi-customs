import { initMongoDB } from '../helpers/initMongo';

type Player = {
  ign: string,
}

type Team = {
  players: Player[],
  contactNumber: string,
  name?: string,
}

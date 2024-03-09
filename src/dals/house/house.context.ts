import { db } from '#core/servers/index.js';
import { IListingAndReview } from './house.model.js';

export const getHouseContext = () =>
  db?.collection<IListingAndReview>('houses');

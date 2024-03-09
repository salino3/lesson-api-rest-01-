import { db } from '#core/servers/index.js';
import { IListingAndReview } from './house.model.js';

export const getMovieContext = () =>
  db?.collection<IListingAndReview>('houses');

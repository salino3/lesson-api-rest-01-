import { ObjectId } from 'mongodb';
import { envConstants } from '#core/constants/index.js';
import {
  connectToDBServer,
  disconnectFromDBServer,
} from '#core/servers/index.js';
import { getMovieContext } from '#dals/movie/movie.context.js';

const runQueries = async () => {
  const result = await getMovieContext()
    .findOneAndUpdate(
      {
        _id: new ObjectId('573a1390f29313caabcd4135'),
      },
      {
        $pull: {
          genres: 'Drama',
        },
      },
      {
        returnDocument: 'after',
        projection: {
          _id: 1,
          title: 1,
          genres: 1,
          imdb: 1,
          'tomatoes.viewer.rating': 1,
        },
      }
    )
  console.log({ result });
};

export const run = async () => {
  await connectToDBServer(envConstants.MONGODB_URI);
  await runQueries();
  await disconnectFromDBServer();
};

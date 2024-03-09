import { envConstants } from '#core/constants/index.js';
import { dbRepository } from './house.db-repository.js';
import { mockRepository } from './house.mock-repository.js';

export const movieRepository = envConstants.isApiMock
  ? mockRepository
  : dbRepository;

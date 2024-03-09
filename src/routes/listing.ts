import express from 'express';
import {
  createReview,
  getAllLimitFive,
  getHouseDetail,
  getHousesByCountry,
} from '#pods/house/airbnb-controller.js';

const listingsRouter = express.Router();

listingsRouter.get('/', getAllLimitFive);

listingsRouter.get('/property/:id', getHouseDetail);

listingsRouter.get('/country/:country', getHousesByCountry);

listingsRouter.post('/:propertyId/reviews', createReview);

export { listingsRouter };

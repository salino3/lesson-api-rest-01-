import { IListingAndReview } from '#dals/house/house.model.js';
import { ApiModel } from './houses.mappers.js';

export const mapAirbnbFromApiToModel = (item: IListingAndReview): ApiModel => ({
  title: item.name,
  images: item.images,
  description: item.description,
  address: item.address,
  bedrooms: item.bedrooms,
  beds: item.bedrooms,
  bathrooms: item.bathrooms,
  reviews: item.reviews,
});

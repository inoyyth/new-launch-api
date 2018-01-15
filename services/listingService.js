import listingModel from '../dao/solr/listings';

export class ListingService {
  constructor(listingModel) {
    this.listingModel = listingModel;
  }
}

async getAllListings (){
  const listingCollection = await listingModel.search();
  return listingCollection;
}

async getListing(id) {
  const listingCollection = await listingModel.search(id);
  return listingCollection;
}
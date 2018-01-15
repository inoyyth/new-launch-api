import listingService from '../../services/listingService';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Listing Service', () => {
    describe('#getAllListings', () => {
        const baseResponse = {
            response: {
                numFound: 1,
                docs:[]
            }
        }
        it('Should return all listings get from solr', () => {
            sinon.stub(listing, 'search').callsFake(() =>);
        })
    })
})